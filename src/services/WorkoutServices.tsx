import { Exercise } from "../context/WorkoutContext";

export const ParseExercices = async (): Promise<Exercise[]>  => {
    return [
        {   
            id: 0,        
            name: "наклоны на одной ноге",
            done: false,
            total_sets: 3,
            weight: 0,
            reps: 0,
            completed_at: 10,
            images: [],
        },
        
        {   
            id: 1,        
            name: "наклоны на двцух ногах",
            done: false,
            total_sets: 3,
            weight: 0,
            reps: 0,
            completed_at: 10,
            images: [],
        },
        
        {   
            id: 2,        
            name: "наклоны на трех ногах",
            done: false,
            total_sets: 3,
            weight: 0,
            reps: 0,
            completed_at: 10,
            images: [],
        }
    ]
}