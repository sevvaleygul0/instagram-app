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

export default StyleSheet.create({});
