import React, { useState,useEffect } from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { search } from '../../assets/icons';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [isSearchListVisible, setIsSearchListVisible] = useState(false);

  // AsyncStorage'dan son 5 aramayı getir
  const loadRecentSearches = async () => {
    try {
      const searches = await AsyncStorage.getItem('recentSearches');
      if (searches) {
        setRecentSearches(JSON.parse(searches));
      }
    } catch (error) {
      console.error('Son aramalar yüklenirken hata oluştu:', error);
    }
  };

  // Yeni arama yaptığında bu fonksiyonu çağır
  const handleSearch = async (text) => {
    setSearchTerm(text);
    onSearch(text); // Arama terimini ana bileşene ilet
  };

  useEffect(() => {
    loadRecentSearches();
  }, []);

  // Arama kaydetme
  const saveSearch = async (searchTerm) => {
    if (!searchTerm.trim()) return;
    try {
      let searches = await AsyncStorage.getItem('recentSearches');
      searches = searches ? JSON.parse(searches) : [];

      if (searches.includes(searchTerm)) {
        searches = searches.filter(search => search !== searchTerm);
      }
      searches.unshift(searchTerm);
      if (searches.length > 5) {
        searches.pop();
      }

      await AsyncStorage.setItem('recentSearches', JSON.stringify(searches));
      setRecentSearches(searches);
    } catch (error) {
      console.error('Arama kaydedilirken hata oluştu:', error);
    }
  };

  // Arama listesini gizleme
  const hideSearchList = () => {
    setIsSearchListVisible(false);
    Keyboard.dismiss();
  };

  // Belirli bir aramayı temizleme
  const handleRemoveSearch = async (searchToRemove) => {
    try {
      let searches = await AsyncStorage.getItem('recentSearches');
      searches = searches ? JSON.parse(searches) : [];
      searches = searches.filter(search => search !== searchToRemove);

      await AsyncStorage.setItem('recentSearches', JSON.stringify(searches));
      setRecentSearches(searches);
    } catch (error) {
      console.error('Arama temizlenirken hata oluştu:', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={hideSearchList}>
      <View style={{ flex: 1 }}>
        <View style={styles.text_search}>
          <Image style={styles.search_conteiner} source={search} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search 872,869 games"
            placeholderTextColor="#888"
            value={searchTerm}
            onChangeText={text => {
              handleSearch(text);
              setIsSearchListVisible(true);
            }}
            onSubmitEditing={() => {
              handleSearch(searchTerm);
              saveSearch(searchTerm); // Arama yapıldıktan sonra kaydet
            }}
          />
        </View>

        {/* Son 5 aramayı listele, sadece liste görünür olduğunda */}
        {isSearchListVisible && recentSearches.length > 0 && (
          <View style={styles.recentSearchList}>
            <FlatList
              data={recentSearches}
              keyExtractor={(index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.recentSearchItemContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      setSearchTerm(item);
                      handleSearch(item); // Arama yapıldığında
                    }}
                  >
                    <Text style={styles.recentSearchItem}>{item}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleRemoveSearch(item)}
                    style={styles.removeButton}
                  >
                    <Text style={styles.removeButtonText}>X</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchBar;
