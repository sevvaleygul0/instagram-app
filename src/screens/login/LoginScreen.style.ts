import {Dimensions, StyleSheet} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  igLogoStyle: {
    width: 200,
    height: 60,
    marginBottom: 40,
  },
  textInputStyle: {
    backgroundColor: '#C43F83',
    width: ScreenWidth * 0.9,
    height: 60,
    padding: 24,
    fontSize: 17,
    color: '#fff',
    fontFamily: 'Merriweather-Bold',
  },
  passwordContainer: {
    marginTop: 20,
  },
});
