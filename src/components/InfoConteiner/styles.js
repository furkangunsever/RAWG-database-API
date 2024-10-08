import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        width:windowWidth,
        height:windowHeight*0.45,
        backgroundColor:"black",
        justifyContent:'center',
        alignItems:'center'
    },
    info_contein:{
        width:windowWidth*0.9,
        height:windowHeight*0.42,
        backgroundColor:"#202020",
        borderRadius:windowWidth*0.05
    },
    image_contein:{
        width:windowWidth*0.9,
        height:windowHeight*0.24,
        backgroundColor:"black",
        borderTopLeftRadius:windowWidth*0.05,
        borderTopRightRadius:windowWidth*0.05,
        resizeMode:'cover'
    },
    text_contein:{
        justifyContent:'space-between',
        alignItems:'flex-start',
        height:windowWidth*0.1,
        width:windowWidth*0.5
    },
    itemText:{
        fontSize:windowWidth*0.05,
        fontWeight:'600',
        color:"white",
        margin:windowWidth*0.02
    },
    favorite:{
        alignItems:'flex-end',
        justifyContent:'flex-start',
        width:windowWidth*0.35
    },
    released:{
        color:"white",
        margin:windowWidth*0.01,
        fontSize:windowWidth*0.035
    }
    
});
export default styles;
