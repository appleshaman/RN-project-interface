import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UI1 from './ui1';
import UI2 from './ui2';
import UI3 from './ui3';
import UI4 from './ui4';
import UI5 from './ui5';
import UI6 from './ui6';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ 
          headerShown: false,  
          tabBarActiveBackgroundColor:"grey", 
          tabBarInactiveBackgroundColor:"black",
          tabBarShowLabel: true,
          tabBarLabelStyle: {color: "white",fontSize: 30},
          tabBarHideOnKeyboard: true
        }}
      >
        <Tab.Screen name="货源" component={UI1} />
        <Tab.Screen name="批发商" component={UI5} />
        <Tab.Screen name="订购" component={UI3} />
        <Tab.Screen name="我的" component={UI6} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}



export default Nav;
