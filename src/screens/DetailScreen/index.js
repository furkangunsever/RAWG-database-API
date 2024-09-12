import {View, Text, Button} from 'react-native';
import React from 'react';
import styles from './styles';
const DetailScreen = ({navigation}) => {
  return (
    <View>
      <Button
        style={styles.goBack}
        title="geri"
        onPress={() => navigation.goBack()}
      />
      <Text>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;
