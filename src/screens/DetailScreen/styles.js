import {StyleSheet,Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    goBack:{
        width:windowWidth*0.1,
        height:windowWidth*0.1
    }
});
export default styles;
