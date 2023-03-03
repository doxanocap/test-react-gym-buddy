
import React, { useState, useContext, useEffect} from 'react';
import WorkoutProvider, { WorkoutContext, WorkoutContextType, ParentCompProps } from '../context/WorkoutContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '../navigations/AppStack';
import { ExercicseDescription } from '../components/ExercicseDescription';

import {
  Container, 
} from '../styles/ExerciseScreenStyles'
import ImageGallery from '../components/ImageGallery';
import HorizontalSelect from '../components/HorizontalSelect';
import LargeButton from '../components/LargeButton'


type ExerciseScreenProps = NativeStackScreenProps<AppStackParamList, "ExerciseScreen">

export const ExerciseScreen: React.FC<ExerciseScreenProps> = ({navigation}) => {

    const {exercises, submitSetCompletion} = useContext(WorkoutContext) as WorkoutContextType 

    return (
      <Container>
        <ExercicseDescription />
        <ImageGallery />
        <HorizontalSelect/>
        <HorizontalSelect/>
        <LargeButton/>
      </Container>
    )
}