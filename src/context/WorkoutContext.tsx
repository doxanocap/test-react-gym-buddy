import React, { createContext, useState, useEffect, SetStateAction } from 'react'
import * as services from '../services/WorkoutServices'

import { StyleSheet, Text, View } from 'react-native';

export interface Exercise {
    id: number,
    set_name: string,
    name: string,
    done: boolean,
    total_sets: number,
    weight: number,
    reps: number,
    completed_at: number,
    images: string[],
}

export interface WorkoutContextType {
    currId: number,
    setCurrId: React.Dispatch<React.SetStateAction<number>>,
    exercises: Exercise[],
    error: string,
    handleExercises: () => void
    submitSetCompletion: (id: number, weight: number, reps: number) => void,

}

const initialWorkContext: WorkoutContextType = {
    currId: 0,
    setCurrId: () => {}, 
    exercises: [],
    error: "",
    handleExercises: () => {} ,
    submitSetCompletion: () => {},
}

export interface ParentCompProps {
    children?: React.ReactNode;
}

  

export const WorkoutContext = createContext<WorkoutContextType | null>(null)

const WorkoutProvider: React.FC<ParentCompProps> = ({ children }: ParentCompProps) => {
    // Exercices[] are realized using stack algorithm
    // every new exercice is appended to the Exercices[] 

    // New exercice cannot be appended, until 
    // Exercices[len - 1] is not completed => { Exercise.done === true }
    const [exercises, setExercises] = useState<Exercise[]>([])
    const [currId, setCurrId] = useState<number>(0)
    const [error, setError] = useState<string>()
    

    const HandleExercices = async () => {
        // handling some previous workout data stored in the backend 
        const data = await services.ParseExercices()        
        setExercises(data)   
    }

    const SubmitSetCompletion = (id: number, weight: number, reps: number) => {
        // Whenever set is completed, we record data about reps and weights 
        // which user used. Also we check if he completed whole exercice 
        setExercises((prev: Exercise[]) => {
            const copy = prev
            copy.map((item) => {
                if (item.id === id) { 
                    item.weight = weight
                    item.reps = reps
                    item.completed_at = Date.now()
                    item.done = true
                    return
                }
            })

            setCurrId(currId+1)            
            
            return copy
        })        
        
        
    }
    
    useEffect(() => {
        (async () => {
            // fetching data and receiving with async func 
            await HandleExercices()     
        })()
    }, [])

    return (
        <WorkoutContext.Provider
            value={{
                currId: currId,
                setCurrId: setCurrId,
                exercises: exercises,
                submitSetCompletion: SubmitSetCompletion,
                handleExercises: HandleExercices,
                error: ""
            }}>
            {children}
        </WorkoutContext.Provider>
    )
}

export default WorkoutProvider