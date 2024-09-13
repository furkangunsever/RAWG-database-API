import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    conteiner:{
    },
    image_contein:{
        width:windowWidth*0.06,
        height:windowWidth*0.06,
        resizeMode:'contain',
        marginTop:windowWidth*0.02,
        marginLeft:windowWidth*0.05,
    }
});
export default styles;
