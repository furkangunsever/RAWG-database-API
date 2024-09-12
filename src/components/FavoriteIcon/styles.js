import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height:windowWidth*0.1,
    width:windowWidth*0.1,
    margin:windowWidth*0.05
  },
  heartIcon: {
    resizeMode:'center',
    width:20,
    height:20
  },
  favori_contein:{
  }
});
export default styles;
