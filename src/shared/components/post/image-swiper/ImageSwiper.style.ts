import {StyleSheet, Dimensions} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export const _imageStyle = (
  imageHeight = ScreenHeight,
  imageWidth = ScreenWidth,
) => ({
  width: imageWidth,
  height: imageHeight,
});

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
    marginTop: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dotsContainer: {
    top: 26,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
