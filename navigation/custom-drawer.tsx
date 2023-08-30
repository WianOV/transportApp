import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//screens import
import Home from '../src/screens/home-screen';
import Settings from '../src/screens/settings';

const CustmeDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      {/* Drawer Screens here */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default CustmeDrawer;
