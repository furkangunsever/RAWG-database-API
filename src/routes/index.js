import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNav from './StackNav';
import TabNav from './TabNav';

export default App = () => {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  );
};