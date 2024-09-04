import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  input_conteiner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    color:"white",
    width:windowWidth*0.7,
    height: windowHeight*0.05,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  icon_size:{
    width:windowWidth*0.07,
    height:windowWidth*0.07,
    resizeMode:'contain',
    marginRight:5
  }
});
export default styles;
