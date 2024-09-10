import {View, Text, TextInput, Image, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {padlock, user} from '../../assets/icons';
import {RouterNames} from '../../config';
import {useNavigation} from '@react-navigation/native';

const TextField = props => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [borderColor, setBorderColor] = useState('gray');
  const [lockBorderColor, setLockBorderColor] = useState('gray');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const dummyUsers = [
    {
      username: 'Furkan',
      password: 'Furkan123.',
    },
    {
      username: 'Ali',
      password: 'Ali123.',
    },
    {
      username: 'Ayse',
      password: 'Ayse123.',
    },
    {
      username: 'Arda',
      password: 'Arda123.',
    },
    {
      username: 'Mete',
      password: 'Mete123.',
    },
  ];
  const handleLogin = () => {
    const foundUser = dummyUsers.find(
      user => user.username === username && user.password === password,
    );

    if (foundUser) {
      navigation.navigate(RouterNames.HOMEPAGE);
    } else {
      Alert.alert('Hata', 'Kullanıcı adı veya şifre hatalı!');
    }
  };

  const validateUsername = () => {
    if (username.trim() === '') {
      setUsernameError('Kullanıcı adı boş olamaz');
      setBorderColor('red');
    } else {
      setUsernameError('');
      setBorderColor('gray');
    }
  };

  const validatePassword = () => {
    if (password.length < 8) {
      setPasswordError('Şifre en az 8 karakter olmalıdır');
      setLockBorderColor('red');
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError('Şifre büyük harf içermelidir');
      setLockBorderColor('red');
    } else if (!/[a-z]/.test(password)) {
      setPasswordError('Şifre küçük harf içermelidir');
      setLockBorderColor('red');
    } else if (!/[0-9]/.test(password)) {
      setPasswordError('Şifre rakam içermelidir');
      setLockBorderColor('red');
    } else {
      setPasswordError('');
      setLockBorderColor('gray');
    }
  };
  const handleSubmit = () => {
    validateUsername();
    validatePassword();
    if (!usernameError && !passwordError) {
      setSuccessMessage('Başarıyla giriş yapıldı!');
    } else {
      setSuccessMessage('');
    }
  };
  return (
    <View>
      <View style={styles.input_conteiner}>
        <Image style={styles.icon_size} source={user} />
        <TextInput
          style={[styles.input, {borderColor: borderColor}]}
          onFocus={() => setBorderColor('orange')}
          onBlur={() => setBorderColor('gray')}
          onChangeText={setUsername}
          value={username}
          placeholder="Kullanıcı adı giriniz"
          placeholderTextColor="gray"
        />
      </View>
      <View>
        {usernameError ? (
          <Text style={styles.errorText}>{usernameError}</Text>
        ) : null}
      </View>
      <View style={styles.input_conteiner}>
        <Image style={styles.icon_size} source={padlock} />
        <TextInput
          style={[styles.input, {borderColor: lockBorderColor}]}
          onFocus={() => setLockBorderColor('orange')}
          onBlur={() => setLockBorderColor('gray')}
          onChangeText={setPassword}
          value={password}
          placeholder="Şifre"
          placeholderTextColor={'gray'}
          secureTextEntry
        />
      </View>
      <View>
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
      </View>
      <Button title="Gönder" onPress={handleLogin} />
      {successMessage ? (
        <Text style={styles.successText}>{successMessage}</Text>
      ) : null}
    </View>
  );
};

export default TextField;
