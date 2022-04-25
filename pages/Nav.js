import  React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./Login"
import FlatPage from "./FlatList"
import Statements from './Statement';
import UI1 from './ui1';
import UI2 from './ui2';
import UI3 from './ui3';
import UI4 from './ui4';
import UI5 from './ui5';
import UI6 from './ui6';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button color={'green'} 
        title = "Go to Details"
        onPress = {() => navigation.navigate('Details')}
        />
      
      <Text>OK</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="UI1">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="FlatList" component={FlatPage} />
        <Stack.Screen name="Statements" component={Statements}/>
        <Stack.Screen name="UI1" component={UI1}/>
        <Stack.Screen name="UI2" component={UI2}/>
        <Stack.Screen name="UI3" component={UI3}/>
        <Stack.Screen name="UI4" component={UI4}/>
        <Stack.Screen name="UI5" component={UI5}/>
        <Stack.Screen name="UI6" component={UI6}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;
