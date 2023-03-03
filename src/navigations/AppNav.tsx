import React, {useContext, useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import { View, ActivityIndicator } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';


const AppNav = () => {
  // after cheking user_auth is Loading sets to false
  const [isLoading, setIsLoading] = useState(false)
  
  if (isLoading) {
    return (
     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <ActivityIndicator size={'large'} color='#DB3022' />
     </View>
    )
  }

 
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  )
}



export default AppNav;