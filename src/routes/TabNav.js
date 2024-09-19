import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouterNames} from '../config';
import {FavoriteScreen, HomeScreen, ProfileScreen} from '../screens';
import {home,user, white_heart} from '../assets/icons';
import {Image,Text,Dimensions,StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName={RouterNames.HOMEPAGE}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconSource;

          if (route.name === RouterNames.HOMEPAGE) {
            iconSource = home;
          } else if (route.name === RouterNames.FAVORITESCREEN) {
            iconSource = white_heart;
          } else if (route.name === RouterNames.PROFILESCREEN) {
            iconSource = user;
          }
          return (
            <Image
              source={iconSource}
              style={{
                width: windowWidth*0.05,
                height: windowWidth*0.05,
                tintColor: focused ? 'tomato' : 'gray',
              }}
            />
          );
        },tabBarLabel: ({ focused }) => {
          let label;

          if (route.name === RouterNames.HOMEPAGE) {
            label = 'Home';
          } else if (route.name === RouterNames.FAVORITESCREEN) {
            label = 'Favorites';
          } else if (route.name === RouterNames.PROFILESCREEN) {
            label = 'Profile';
          }

          return (
            <Text style={{ 
              color: focused ? 'tomato' : 'gray', 
              fontSize: windowWidth*0.03 
            }}>
              {label}
            </Text>
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {backgroundColor: 'black', borderTopWidth: 0}
      })}>
      <Tab.Screen name={RouterNames.HOMEPAGE} component={HomeScreen} />
      <Tab.Screen
        name={RouterNames.FAVORITESCREEN}
        component={FavoriteScreen}
      />
      <Tab.Screen name={RouterNames.PROFILESCREEN} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
