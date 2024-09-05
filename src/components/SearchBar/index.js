import {View, Text, Image,TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import { search } from '../../assets/icons';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View>
        
      <View style={styles.text_search}>
        <View>
            <Image style={styles.search_conteiner} source={search}/>
        </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search 872,869 games"
        placeholderTextColor="#ccc"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      </View>
    </View>
  );
};

export default SearchBar;
