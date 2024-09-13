import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: '#151515',
  },
  goBack: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },
  img_contein: {
    width: windowWidth * 1,
    height: windowWidth * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_contein: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.24,
    borderRadius: windowWidth * 0.05,
  },

  text_contein: {
    width: windowWidth * 1,
    height: windowWidth * 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  game_name: {
    fontSize: windowWidth * 0.065,
    fontWeight: '700',
    color: 'white',
  },
  released_contein: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.1,
    paddingLeft: windowWidth * 0.05,
    justifyContent: 'center',
  },
  releasedate_text: {
    fontSize: windowWidth * 0.035,
    fontWeight: '600',
    color: 'gray',
  },
  released_text: {
    fontSize: windowWidth * 0.03,
    fontWeight: '600',
    color: 'white',
  },
  minimum_contein: {
    width: windowWidth * 1,
    height: windowHeight,
  },
});
export default styles;
