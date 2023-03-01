import { Exercise } from "../context/workContext";

export const ParseExercices = async (): Promise<Exercise[]>  => {
    return [
        {   
            id: 0,        
            name: "наклоны на одной ноге",
            done: false,
            completed_sets: 0,
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
            completed_sets: 0,
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
            completed_sets: 0,
            total_sets: 3,
            weight: 0,
            reps: 0,
            completed_at: 10,
            images: [],
        }
    ]
}