import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    conteiner:{
        width:windowWidth,
        height:windowHeight*0.4,
        backgroundColor:"red",
        justifyContent:'center',
        alignItems:'center'
    },
    info_contein:{
        width:windowWidth*0.9,
        height:windowWidth*0.8,
        backgroundColor:"#202020",
        borderRadius:windowWidth*0.05
    },
    image_contein:{
        width:windowWidth*0.9,
        height:windowHeight*0.24,
        backgroundColor:"black",
        borderTopLeftRadius:windowWidth*0.05,
        borderTopRightRadius:windowWidth*0.05
    }
});
export default styles;
