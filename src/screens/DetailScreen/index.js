import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {ArrowButton} from '../../components';
const DetailScreen = ({navigation, route}) => {
  const {name, ratings, image, genres, rating, tags, released} = route.params;
  return (
    <View style={styles.conteiner}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowButton />
        </TouchableOpacity>
        <View style={styles.text_contein}>
          <Text style={styles.game_name}>{name}</Text>
        </View>
        <View style={styles.img_contein}>
          <Image source={{uri: image}} style={styles.image_contein} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.released_contein}>
            <Text style={styles.releasedate_text}>Release Date:</Text>
            <Text style={styles.released_text}>{released}</Text>
          </View>
          <View style={styles.released_contein}>
            <Text style={styles.releasedate_text}>Rating:</Text>
            <Text style={styles.released_text}>{rating}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.released_contein}>
            <Text style={styles.releasedate_text}>Genres:</Text>
            <Text style={styles.released_text}>{genres}</Text>
          </View>
          <View style={styles.released_contein}>
            <Text style={styles.releasedate_text}>Tags:</Text>
            <Text style={styles.released_text}>{tags}</Text>
          </View>
        </View>
        <View style={styles.released_contein}>
          <Text style={styles.releasedate_text}>Minimum requirement:</Text>
        </View>

        <View style={styles.minimum_contein}>
          <Text style={styles.released_text}>{ratings}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
