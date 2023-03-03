import React, {useContext, useState} from 'react';

import { useFonts } from 'expo-font';
import AppNav from './src/navigations/AppNav';
import WorkoutProvider from './src/context/WorkoutContext';



const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    MetropolisBold: require("./assets/fonts/Metropolis-Bold.otf"),
    MetropolisSemiBold: require("./assets/fonts/Metropolis-Light.otf"),
    MetropolisMedium: require("./assets/fonts/Metropolis-Medium.otf"),
    MetropolisRegular: require("./assets/fonts/Metropolis-Regular.otf"),
  });
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <WorkoutProvider>
      <AppNav />
    </WorkoutProvider>
  );
}

export default App;