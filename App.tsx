import React, {useContext, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WorkoutProvider, { WorkoutContext, WorkoutContextType, ParentCompProps } from './src/context/workContext';



const App: React.FC = () => {
  return (
    <WorkoutProvider>
      <TestComponent>

      </TestComponent>
    </WorkoutProvider>
  );
}

const TestComponent: React.FC<ParentCompProps> = () => {  
  // to make sure that everything from the context is working
  const {exercises, isLoading, submitSetCompletion} = useContext(WorkoutContext) as WorkoutContextType 

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}> 
      {exercises?.map((item, key) => {
        return (
          <TouchableOpacity
            key={key} 
            style={{
              height: 100,
              width: 100,
              margin: 10,
              alignItems: 'center',
              backgroundColor: 'gray'}}>

            <Text>
              {item.name} 
            </Text>

          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;