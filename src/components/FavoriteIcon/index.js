import {View,TouchableOpacity,Image} from 'react-native';
import React, { useState } from 'react';
import { red_heart, white_heart } from '../../assets/icons';
import styles from './styles';

const FavoriteIcon = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited); 
  };
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={toggleFavorite}>
      <View style={styles.favori_contein}>
      <Image
        source={
          isFavorited
            ? red_heart
            : white_heart
        }
        style={styles.heartIcon}
      />
      </View>
    </TouchableOpacity>
  </View>
  );
};

export default FavoriteIcon;
