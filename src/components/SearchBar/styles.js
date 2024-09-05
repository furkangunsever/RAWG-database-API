import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    text_search:{
        flexDirection:'row',
        backgroundColor:"gray",
        borderRadius:windowWidth*0.05,
        width:windowWidth*0.5,
        height:windowWidth*0.1

    },
    search_conteiner:{
        resizeMode:'center',
        width:windowWidth*0.05,
        height:windowHeight*0.05,
        marginLeft:5,
        marginRight:5
    }
});
export default styles;
