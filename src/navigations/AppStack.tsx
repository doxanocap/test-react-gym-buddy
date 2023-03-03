import React, {useContext} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons';
import { ExerciseScreen } from '../screens/ExerciseScreen';

export type AppStackParamList = {
    App: {name: "workoutSetScreen"};
    ExerciseScreen: undefined,
};

type AppStack = NativeStackScreenProps<AppStackParamList, "App">

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {  
  return (
    <Stack.Navigator initialRouteName="ExerciseScreen">
        <Stack.Screen 
            name={"ExerciseScreen"}
            component={ExerciseScreen}
            options={{ 
                headerShown: false, 
                title:'', 
                headerStyle: {backgroundColor: 'black'} 
            }}/>
        
    </Stack.Navigator>    
  )
}

export default AppStack;