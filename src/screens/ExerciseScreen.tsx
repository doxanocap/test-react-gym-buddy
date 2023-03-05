
import React, { useState, useContext, useEffect} from 'react';
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
  
    return (
      <Container>
        <ExercicseDescription />
        <ImageGallery />
        <HorizontalSelect type={"weight"}/>
        <HorizontalSelect type={"reps"}/>
        <LargeButton/>
      </Container>
    )
}