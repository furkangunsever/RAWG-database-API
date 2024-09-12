import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {profile_image} from '../../assets/images';
const ProfileScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.conteiner}>
      <View style={styles.text_contein}>
        <Text style={styles.profile_text}>Profilim</Text>
      </View>
      <View style={styles.profile_contein}>
        <View style={styles.profile_radius}>
          <Image style={styles.p_image} source={profile_image} />
        </View>
        <View style={styles.name_contein}>
          <Text style={styles.name_text}>Furkan Günsever</Text>
        </View>
      </View>
      <View style={[styles.profile_contein, {borderColor: '#202020'}]}>
        <View style={styles.name_contein}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.button_text}>Çıkış Yap</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
