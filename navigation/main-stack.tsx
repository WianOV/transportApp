import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import app screen here
import Home from '../src/screens/home-screen';
import Details from '../src/screens/details';
import Settings from '../src/screens/settings';
import {MainStackParamList} from '../types/navigation';
import CustmeDrawer from './custom-drawer';
import DestinationSearch from '../src/screens/destinations-search/destination-search';
import SearchResults from '../src/screens/search-result/search-results';

//Stack will receive a MainStackParamList - Type
const Stack = createNativeStackNavigator<MainStackParamList>();
// const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      {/* screens here */}
      <Stack.Screen name="NavApp" component={CustmeDrawer} />
      <Stack.Screen name="SearchResults" component={SearchResults} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
