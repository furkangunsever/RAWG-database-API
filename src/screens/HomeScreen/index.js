import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, ActivityIndicator} from 'react-native';
import styles from './styles';
import {fetchGames} from '../../service/api';
import {InfoConteiner, SearchBar} from '../../components';
import {rawg} from '../../assets/images';
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
          <InfoConteiner name={item.name} image={item.background_image} />
        )}
      />
    </View>
  );
};

export default HomeScreen;
