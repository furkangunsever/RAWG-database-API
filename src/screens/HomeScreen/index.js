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
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [lastSearchedGames, setLastSearchedGames] = useState([]);
  useEffect(() => {
    const getGames = async () => {
      try {
        const gameList = await fetchGames();
        setGames(gameList);
        setFilteredGames(gameList);
        setLoading(false);
      } catch (error) {
        console.error('Oyunları çekerken hata oluştu:', error);
        setLoading(false);
      }
    };

    getGames();
  }, []);

  useEffect(() => {
    if (typeof searchTerm !== 'string') return;
    if (searchTerm.trim() === '') {
      // Eğer arama terimi boşsa tüm oyunları göster
      setFilteredGames(games);
    } else {
      const filtered = games.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      if (filtered.length > 0) {
        setFilteredGames(filtered); // Eşleşen oyunlar varsa bunları göster
        setLastSearchedGames(filtered); // Sonuçları kaydet
      } else {
        setFilteredGames(lastSearchedGames); // Eşleşme yoksa son listelenen oyunları göster
      }
    }
  }, [searchTerm, games]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Yükleniyor...</Text>
      </View>
    );
  }

  if (filteredGames.length === 0) {
    return (
      <View style={styles.noGameContainer}>
        <Text>Oyun bulunamadı</Text>
      </View>
    );
  }

  return (
    <View style={{flex:1,backgroundColor:"black"}}>
      <View style={styles.tabbar}>
        <Image style={styles.image_conteiner} source={rawg} />
        <View style={{zIndex: 1}}>
          <SearchBar onSearch={(term) => setSearchTerm(term)} />
        </View>
      </View>
      <FlatList
        data={filteredGames}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <InfoConteiner
            id={item.id}
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
                  <Text style={{color: 'white'}}>
                    Şuan Bu Veriye Erişilemiyor
                  </Text>
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
