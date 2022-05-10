
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UI1_main from './ui1_main';
import UI1_sub from './ui1_sub';

import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

function N1() {
  return (
    <NavigationContainer
    independent = {true}
    >
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="UI1_main" component={UI1_main} />
        <Stack.Screen name="UI1_sub" component={UI1_sub} />
        
      </Stack.Navigator>
    </NavigationContainer>
      

  );
}

export default N1;