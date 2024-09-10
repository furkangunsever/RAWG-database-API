import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const InfoConteiner = ({name, image}) => {
  return (
    <View style={styles.conteiner}>
      <View style={styles.info_contein}>
        <Image source={{uri: image}} style={styles.image_contein} />
        <View style={styles.text_contein}>
          <Text style={styles.itemText}>{name}</Text>
        </View>
      </View>
    </View>
  );
};

export default InfoConteiner;
