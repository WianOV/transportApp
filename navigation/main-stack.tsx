import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import app screen here
import Home from '../src/screens/home-screen';
import Details from '../src/screens/details';
import Settings from '../src/screens/settings';
import {MainStackParamList} from '../types/navigation';
import CustmeDrawer from './custom-drawer';

//Stack will receive a MainStackParamList - Type
// const Stack = createNativeStackNavigator<MainStackParamList>();
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      {/* screens here */}
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
