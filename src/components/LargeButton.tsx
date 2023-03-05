import React, {useContext} from 'react'
import WorkoutProvider, { WorkoutContext, WorkoutContextType, ParentCompProps } from '../context/WorkoutContext';

import {
  Text,
  Button,
} from '../styles/LargeButtonStyles'



const LargeButton = () => {
  
  const {submitSetCompletion, currId, exercises} = useContext(WorkoutContext) as WorkoutContextType 
  
  const curr = exercises[currId]
  const weight = curr?.weight
  const reps = curr?.reps
  const _cs = currId
  const _ts = curr?.total_sets


  const submit = () => {
    if (currId < exercises.length-1) {
      submitSetCompletion(currId,weight,reps)
    } else {
      alert("you completed one workout set")
    }
  }
  return (
    <Button
      onPress={() => submit()}>
      <Text>ПОДТВЕРДИТЬ ({_cs+1} ИЗ {_ts})</Text>
    </Button>
  )
}

export default LargeButton