import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: '#202020',
  },
  text_contein: {
    backgroundColor: '#202020',
    width: windowWidth,
    height: windowHeight * 0.1,
    alignItems:'center',
    justifyContent:'center',
    marginTop:windowWidth*0.025
  },
  profile_text:{
    fontSize:windowWidth*0.05,
    fontWeight:'700',
    color:"white",
  },
  profile_contein:{
    margin:windowWidth*0.05,
    backgroundColor:"#202020",
    width:windowWidth*0.9,
    height:windowHeight*0.4,
    borderBottomWidth:1,
    borderColor:"white",
    alignItems:'center',
    justifyContent:'center'
  },
  profile_radius:{
    width:windowWidth*0.35,
    height:windowWidth*0.35,
    backgroundColor:"white",
    borderRadius:windowWidth*0.5,
    alignItems:'center',
    justifyContent:'center'
  },
  p_image:{
    width:windowWidth*0.34,
    height:windowWidth*0.34,
    borderRadius:windowWidth*0.5
  },
  name_contein:{
    width:windowWidth*0.7,
    height:windowHeight*0.07,
    backgroundColor:"#202020",
    alignItems:'center',
    justifyContent:'center'
  },
  name_text:{
    color:"white",
    fontSize:windowWidth*0.05,
    fontWeight:'600',
  },
  button:{
    width:windowWidth*0.4,
    height:windowWidth*0.1,
    backgroundColor:"white",
    borderRadius:windowWidth*0.05,
    alignItems:'center',
    justifyContent:'center'
  },
  button_text:{
    fontSize:windowWidth*0.04,
    fontWeight:'600',
    color:"black"
  }

});
export default styles;
