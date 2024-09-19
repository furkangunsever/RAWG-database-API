import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  main_background: {
    backgroundColor: '#444a56',
    width: windowWidth,
    height: windowHeight,
  },
  conteiner:{
    padding:windowWidth*0.1,
  },
  login_conteiner: {
    alignItems:'baseline'
  },
  login_text: {
    fontSize: windowWidth * 0.1,
    fontWeight: '700',
    color: 'white',
  },
  input_conteiner:{
    marginTop:windowHeight*0.3,
  }
});
export default styles;
