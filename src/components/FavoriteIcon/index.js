import {View, TouchableOpacity, Image} from 'react-native';
import React, {useContext} from 'react';
import {FavoritesContext} from '../../contexts/FavoritesContext';
import {red_heart, white_heart} from '../../assets/icons';
import styles from './styles';

const FavoriteIcon = ({id, name, image, rating, released}) => {
  const {favorites, addFavorite, removeFavorite} = useContext(FavoritesContext);
  const isFavorited = favorites.some(fav => fav.id === id);

  const toggleFavorite = () => {
    isFavorited
      ? removeFavorite(id)
      : addFavorite({id, name, image, rating, released});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleFavorite}>
        <View style={styles.favori_contein}>
          <Image
            source={isFavorited ? red_heart : white_heart}
            style={styles.heartIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteIcon;
