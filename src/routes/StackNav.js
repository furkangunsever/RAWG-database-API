import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouterNames} from '../config/';
import {HomeScreen, Login} from '../screens';
import TabNav from './TabNav';

const Stack = createNativeStackNavigator();

export default StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName={RouterNames.LOGIN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouterNames.LOGIN} component={Login} />
      <Stack.Screen name={RouterNames.HOMEPAGE} component={TabNav} />
    </Stack.Navigator>
  );
};
