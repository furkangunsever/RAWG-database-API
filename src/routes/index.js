import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './StackNav';
import TabNav from './TabNav';
import {FavoritesProvider} from '../contexts/FavoritesContext';

export default App = () => {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </FavoritesProvider>
  );
};
