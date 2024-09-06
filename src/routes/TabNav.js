import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouterNames} from '../config';
import {NavigationContainer} from '@react-navigation/native';
import {FavoriteScreen, HomeScreen, ProfileScreen} from '../screens';

const Tab = createBottomTabNavigator();

export default TabNav = () => {
  return (
    
      <Tab.Navigator
        initialRouteName={RouterNames.HOMEPAGE}
        screenOptions={{headerShown: false}}>
        <Tab.Screen name={RouterNames.HOMEPAGE} component={HomeScreen} />
        <Tab.Screen name={RouterNames.FAVORITESCREEN} component={FavoriteScreen} />
        <Tab.Screen name={RouterNames.PROFILESCREEN} component={ProfileScreen} />
      </Tab.Navigator>
  );
};
