import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//screens import
import Home from '../src/screens/home-screen';
import Settings from '../src/screens/settings';
import StyledDrawer from './styled-drawer';

const CustmeDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props => <StyledDrawer {...props} />}>
      {/* Drawer Screens here */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default CustmeDrawer;
