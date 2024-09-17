import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from 'react-native';
import styles from './styles';
import {fetchGames} from '../../service/api';
import {InfoConteiner, SearchBar} from '../../components';
import {rawg} from '../../assets/images';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGames = async () => {
      try {
        const gameList = await fetchGames();
        setGames(gameList);
        setLoading(false);
      } catch (error) {
        console.error('Oyunları çekerken hata oluştu:', error);
        setLoading(false);
      }
    };

    getGames();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  if (games.length === 0) {
    return (
      <View style={styles.noGameContainer}>
        <Text>Oyun bulunamadı</Text>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.tabbar}>
        <Image style={styles.image_conteiner} source={rawg} />
        <View>
          <SearchBar />
        </View>
      </View>
      <FlatList
        data={games}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <InfoConteiner
            id ={item.id}
            name={item.name}
            image={item.background_image}
            released={item.released}
            genres={item.genres[0].name}
            rating={item.rating}
            tags={item.tags[1].name}
            ratings={item.platforms.map(platform => (
              <View
                style={{
                  width: windowWidth * 1,
                  height: windowHeight * 0.8,
                  backgroundColor: '#151515',
                  paddingLeft: windowWidth * 0.05,
                }}
                key={platform.platform.id}>
                {platform.requirements_en &&
                platform.requirements_en.minimum ? (
                  <Text style={{color: 'white'}}>
                    {platform.requirements_en.minimum}
                  </Text>
                ) : (
                  <Text style={{color: 'white'}}></Text>
                )}
              </View>
            ))}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;
