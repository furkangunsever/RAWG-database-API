import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    text_search: {
        flexDirection: 'row',
        backgroundColor: '#F0F0F0',
        borderRadius: windowWidth*0.05,
        width: windowWidth * 0.5,
        height: windowWidth*0.1, 
        alignItems: 'center',
        paddingHorizontal: windowWidth*0.03,
        marginVertical: windowWidth*0.025,
      },
      search_conteiner: {
        width: windowWidth*0.05,
        height: windowWidth*0.05,
        marginRight: windowWidth*0.01,
        tintColor: '#888',
      },
      searchInput: {
        fontSize: windowWidth*0.037,
        color: 'black',
        paddingLeft: windowWidth*0.02,
      },
      recentSearchItem: {
        padding: windowWidth*0.023,
        fontSize: windowWidth*0.035,
        color: '#555',
        backgroundColor: '#fff',
      },
      recentSearchList: {
        marginHorizontal: windowWidth*0.02,
        backgroundColor: 'white',
        borderRadius: windowWidth*0.03,
        paddingHorizontal: windowWidth*0.02,
        zIndex:1,
        height:windowWidth*0.4
      },
      clearButton: {
        backgroundColor: '#ff4d4d', // Kırmızı arka plan (dilediğin gibi değiştirebilirsin)
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
      },
      clearButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
      },
      removeButton: {
        width:windowWidth*0.07,
        height:windowWidth*0.07, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:5
      },
      removeButtonText: {
        color: 'black',
        fontWeight: 'bold',
      },
      recentSearchItemContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:"#CBC9C9FF"
      }
    
});
export default styles;
