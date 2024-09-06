import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {rawg} from '../../assets/images';
import {InfoConteiner, SearchBar} from '../../components';

const HomeScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.conteiner}>
      <View>
        <View style={styles.tabbar}>
          <Image style={styles.image_conteiner} source={rawg} />
          <View>
            <SearchBar />
          </View>
        </View>
        <ScrollView>
            <InfoConteiner/>
            <InfoConteiner/>
            <InfoConteiner/>
            <InfoConteiner/>
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
