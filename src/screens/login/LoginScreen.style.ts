import {Dimensions, StyleSheet} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;

export const _singupText = (isColor?: boolean) => ({
  fontSize: 13,
  color: isColor ? '#4AA8CF' : '#A1A1A1',
  fontFamily: 'Merriweather-Bold',
});

export default StyleSheet.create({
  container: {
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
    backgroundColor: '#EEEEEE',
    width: ScreenWidth * 0.9,
    height: 40,
    paddingLeft: 20,
    fontSize: 11,
    color: '#878787',
    borderRadius: 4,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    fontFamily: 'Merriweather-Bold',
  },
  passwordContainer: {
    marginTop: 20,
  },
  loginButtonStyle: {
    borderRadius: 4,
    backgroundColor: '#5ACCFB',
    width: ScreenWidth * 0.9,
    height: 40,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FAFAFA',
    fontSize: 12,
    fontFamily: 'Merriweather-Bold',
  },
  forgotButtonStyle: {
    marginTop: 12,
    marginLeft: 'auto',
    right: 20,
  },
  dividerStyle: {
    backgroundColor: '#CECECE',
    height: 0.2,
    alignSelf: 'center',
    width: ScreenWidth * 0.4,
  },
  dividerContainer: {
    marginTop: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerText: {
    alignSelf: 'center',
    paddingHorizontal: 5,
    color: '#A1A1A1',
    fontFamily: 'Merriweather-Bold',
    fontSize: 14,
  },
  facebookIcon: {
    width: 25,
    height: 25,
  },
  facebookButtonStyle: {
    flexDirection: 'row',
    marginTop: 36,
    alignItems: 'center',
  },
  facebookText: {
    fontFamily: 'Merriweather-Bold',
    color: '#0098C9',
    fontSize: 14,
    marginLeft: 8,
  },
  signupButton: {
    position: 'absolute',
    bottom: 0,
    width: ScreenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 75,
    borderColor: '#CECECE',
    borderTopWidth: 1,
  },
  forgotText: {
    fontSize: 11,
    color: '#4AA8CF',
    fontFamily: 'Merriweather-Bold',
  },
});
