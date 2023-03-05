import React, { useContext } from 'react'
import {WorkoutContext, WorkoutContextType} from '../context/WorkoutContext'
import {
  Container, 
  TopText,
  LargeText,
  SmallText,
} from '../styles/ExercicesDescriptionStyles'


export const ExercicseDescription = () => {
    const {exercises, currId} = useContext(WorkoutContext) as WorkoutContextType
    const exercise = exercises[currId]
    
    return (
        <Container>
            <TopText>{exercise?.set_name}</TopText>
            <LargeText>{currId+1}/{exercise?.total_sets}</LargeText>
            <SmallText>подход</SmallText>
        </Container> 
    )
}
