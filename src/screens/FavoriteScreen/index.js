import React, {useContext} from 'react';
import {View, FlatList, Text} from 'react-native';
import {FavoritesContext} from '../../contexts/FavoritesContext';
import InfoConteiner from '../../components/InfoConteiner';

const FavoritesScreen = () => {
  const {favorites} = useContext(FavoritesContext);
  console.log(favorites);
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={item =>
            item.id ? item.id.toString() : Math.random().toString()
          }
          renderItem={({item}) => (
            <InfoConteiner
              id={item.id}
              name={item.name}
              image={item.image}
              released={item.released}
              rating={item.rating}
            />
            
          )}
        />
      ) : (
        <Text style={{color: 'white', textAlign: 'center', marginTop: 400}}>
          Henüz favori eklenmedi.
        </Text>
      )}
    </View>
  );
};

export default FavoritesScreen;
