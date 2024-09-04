import {View, Text, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {padlock, user} from '../../assets/icons';

const TextField = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <View style={styles.input_conteiner}>
        <Image style={styles.icon_size} source={user} />
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Kullanıcı adı giriniz"
          placeholderTextColor={'gray'}
        />
      </View>
      <View style={styles.input_conteiner}>
        <Image style={styles.icon_size} source={padlock} />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Şifre"
          placeholderTextColor={'gray'}
          secureTextEntry
        />
      </View>
    </View>
  );
};

export default TextField;
