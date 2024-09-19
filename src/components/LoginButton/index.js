import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const LoginButton = ({handleSubmit}) => {
  return (
    <View style={styles.button_conteiner}>
      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.login_button}>
          <Text style={styles.login_text}>Log in</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButton;
