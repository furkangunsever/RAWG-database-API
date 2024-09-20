import React, {useContext} from 'react';
import {View, FlatList, Text, Dimensions} from 'react-native';
import {FavoritesContext} from '../../contexts/FavoritesContext';
import InfoConteiner from '../../components/InfoConteiner';
import styles from '../HomeScreen/styles';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const FavoritesScreen = () => {
  const {favorites} = useContext(FavoritesContext);
  console.log(favorites);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        paddingTop: windowHeight * 0.03,
      }}>
      <View style={styles.tabbar}>
        <Text
          style={{
            fontSize: windowWidth * 0.05,
            fontWeight: '700',
            color: 'white',
          }}>
          Favorites
        </Text>
      </View>
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
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: windowWidth * 0.03,
            marginTop:windowHeight*0.5
          }}>
          Henüz favori eklenmedi.
        </Text>
      )}
    </View>
  );
};

export default FavoritesScreen;
