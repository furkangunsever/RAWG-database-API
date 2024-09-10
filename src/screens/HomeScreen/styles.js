import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  conteiner: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#151515',
  },
  tabbar: {
    flexDirection: 'row',
    width: windowWidth,
    height: windowWidth * 0.15,
    backgroundColor: '#151515',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image_conteiner: {
    resizeMode: 'contain',
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noGameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
