import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  button_conteiner: {
    alignItems: 'center',
    marginTop: windowHeight * 0.1,
  },
  login_button: {
    width: windowWidth * 0.5,
    height: windowWidth * 0.16,
    backgroundColor: 'black',
    borderRadius: windowWidth * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  login_text: {
    color: 'white',
    fontSize: windowWidth * 0.05,
    fontWeight: '500',
  },
});
export default styles;
