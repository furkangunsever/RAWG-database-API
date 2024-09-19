import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  input_conteiner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: windowHeight*0.02,
  },
  input: {
    color: 'white',
    width: windowWidth * 0.7,
    height: windowHeight * 0.05,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom:windowHeight*0.01,
    paddingHorizontal: 8,
  },
  icon_size: {
    width: windowWidth * 0.07,
    height: windowWidth * 0.07,
    resizeMode: 'contain',
    marginRight: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop:-windowHeight*0.02
  },
  successText: {
    color: 'pink',
    fontSize: 16,
    marginTop: 16,
  },
});
export default styles;
