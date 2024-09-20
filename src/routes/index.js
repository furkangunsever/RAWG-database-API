import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './StackNav';
import TabNav from './TabNav';
import {FavoritesProvider} from '../contexts/FavoritesContext';
import { StatusBar } from 'react-native';

export default App = () => {
  return (
    <FavoritesProvider>
      <StatusBar hidden={true}/>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </FavoritesProvider>
  );
};
