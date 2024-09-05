import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const InfoConteiner = () => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.info_contein}>
        <View style={styles.image_contein}></View>
      </View>
    </View>
  );
};

export default InfoConteiner;
