import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
const FavoriteScreen = props => {
    const {navigation} = props;
  return (
    <View style={{backgroundColor:"#202020",flex:1}}>
      <Text style={{color:"white"}}>FavoriteScreen</Text>
    </View>
  );
};

export default FavoriteScreen;
