import { Exercise } from "../context/WorkoutContext";

export const ParseExercices = async (): Promise<Exercise[]>  => {
    return [
        {   
            id: 0,
            set_name: "ТРИСЕТ",        
            name: "НАКЛОНЫ НА ОДНОЙ НОГЕ",
            done: false,
            total_sets: 3,
            weight: 0,
            reps: 0,
            completed_at: 0,
            images: [],
        },
        {   
            id: 1,        
            set_name: "ТРИСЕТ 2",        
            name: "НАКЛОНЫ НА ДВУХ НОГАХ",
            done: false,
            total_sets: 3,
            weight: 0,
            reps: 0,
            completed_at: 10,
            images: [],
        },
        {   
            id: 2,        
            set_name: "ТРИСЕТ 3",        
            name: "НАКЛОНЫ НА ТРЕХ НОГАХ",
            done: false,
            total_sets: 3,
            weight: 0,
            reps: 0,
            completed_at: 0,
            images: [],
        }
    ]
}