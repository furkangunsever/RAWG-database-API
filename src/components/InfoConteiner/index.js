import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import React, {useContext} from 'react';
import styles from './styles';
import {RouterNames} from '../../config';
import {useNavigation} from '@react-navigation/native';
import {FavoriteIcon} from '..';
import {FavoritesContext} from '../../contexts/FavoritesContext';

const InfoConteiner = ({
  name,
  image,
  released,
  ratings,
  genres,
  rating,
  tags,
  id,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.conteiner}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RouterNames.DETAİLSCREEN, {
            name,
            ratings,
            image,
            genres,
            rating,
            tags,
            released,
            id,
          });
        }}>
        <View style={styles.info_contein}>
          <View>
            <Image source={{uri: image}} style={styles.image_contein} />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.text_contein}>
              <Text style={styles.itemText}>{name}</Text>
              <Text style={styles.released}>Çıkış Tarihi: {released}</Text>
              <Text style={styles.released}>Ratinig: {rating} ⭐</Text>
            </View>
            <View style={styles.favorite}>
              <FavoriteIcon
              id={id}
              name={name}
              image={image}
              rating={rating}
              released={released}
            />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InfoConteiner;
