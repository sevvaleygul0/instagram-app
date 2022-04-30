import {StyleSheet, Dimensions} from 'react-native';
const ScreenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  gridImageStyle: {
    height: ScreenWidth / 3,
    width: ScreenWidth / 3,
    borderWidth: 2,
    borderColor: '#fff',
  },
  gridPostTypeImage: {
    position: 'absolute',
    right: 5,
    top: 5,
    height: 18,
    width: 18,
  },
});
