import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
const FavoriteScreen = props => {
    const {navigation} = props;
  return (
    <View>
      <Text onPress={()=>{navigation.navigate(RouterNames.HOMEPAGE)}}>FavoriteScreen</Text>
    </View>
  );
};

export default FavoriteScreen;
