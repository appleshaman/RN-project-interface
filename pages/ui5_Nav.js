// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UI5_main from './ui5_main';
import UI5_sub from './ui5_sub';

import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

function N5() {
  return (
    <NavigationContainer
    independent = {true}
    >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="UI5_main" component={UI5_main} />
        <Stack.Screen name="UI5_sub" component={UI5_sub} />
        
      </Stack.Navigator>
    </NavigationContainer>
      

  );
}

export default N5;