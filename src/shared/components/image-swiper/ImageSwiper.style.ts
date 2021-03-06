import {StyleSheet, Dimensions} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;

export const _dot = (currentPage: number, index: number) => ({
  height: 6,
  width: 6,
  borderRadius: 6,
  backgroundColor: currentPage === index ? '#0195F6' : '#ccc',
  zIndex: 99,
  marginLeft: 5,
});

export default StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: ScreenWidth,
    height: 450,
  },
  dotsContainer: {
    top: 26,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
