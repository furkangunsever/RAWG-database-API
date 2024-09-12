import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        width:windowWidth,
        height:windowWidth*0.85,
        backgroundColor:"black",
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
    },
    text_contein:{
        justifyContent:'space-between',
        alignItems:'flex-start',
        height:windowWidth*0.2,
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
        margin:windowWidth*0.02
    }
    
});
export default styles;
