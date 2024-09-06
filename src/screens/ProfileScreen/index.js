import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import { RouterNames } from '../../config';
const ProfileScreen = props => {
    const {navigation} = props;
  return (
    <View>
      <Text onPress={()=>{navigation.navigate(RouterNames.HOMEPAGE)}}>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
