import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {LoginButton, TextField} from '../../components';
import {RouterNames} from '../../config';

const Login = props => {
  const {navigation} = props;
  return (
    <View style={styles.main_background}>
      <View style={styles.conteiner}>
        <View style={styles.login_conteiner}>
          <Text style={styles.login_text}>Log In</Text>
        </View>
        <View style={styles.input_conteiner}>
          <TextField />
        </View>
      </View>
    </View>
  );
};

export default Login;
