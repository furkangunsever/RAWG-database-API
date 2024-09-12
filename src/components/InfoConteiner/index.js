import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {RouterNames} from '../../config';
import {useNavigation} from '@react-navigation/native';
import { FavoritIcon } from '..';

const InfoConteiner = ({name, image, released, ratings}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RouterNames.DETAİLSCREEN);
        }}>
        <View style={styles.info_contein}>
          <View>
            <Image source={{uri: image}} style={styles.image_contein} />
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles.text_contein}>
            <Text style={styles.itemText}>{name}</Text>
            <Text style={styles.released}>Çıkış Tarihi: {released}</Text>
            <Text style={{color: 'red'}}>{ratings}</Text>
          </View>
          <View style={styles.favorite}><FavoritIcon/></View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InfoConteiner;
