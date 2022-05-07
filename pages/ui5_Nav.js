// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UI5_main from './ui5';
import UI5_sub from './ui5_sub';
const Stack = createNativeStackNavigator();

function N5() {
  return (

      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="UI5_main" component={UI5_main} />
        <Stack.Screen name="UI5_sub" component={UI5_sub} />
        
      </Stack.Navigator>

  );
}

export default N5;