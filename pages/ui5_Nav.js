// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UI5_main from './ui5';
import UI3 from './ui3';
const Stack = createNativeStackNavigator();

function N5() {
  return (

      <Stack.Navigator>
        <Stack.Screen name="UI5_main" component={UI5_main} />
        {/* <Stack.Screen name="UI5_sub" component={UI5_sub} /> */}
        
      </Stack.Navigator>

  );
}

export default N5;