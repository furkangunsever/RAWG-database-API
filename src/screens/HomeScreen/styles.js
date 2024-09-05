import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  conteiner: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#151515',
  },
  tabbar: {
    flexDirection: 'row',
    width: windowWidth,
    height: windowWidth * 0.15,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image_conteiner:{
    resizeMode:'contain'
  }
});
export default styles;
