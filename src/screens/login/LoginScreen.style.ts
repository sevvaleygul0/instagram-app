import {Dimensions, StyleSheet} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;

export const _forgotText = (bold?: string) => ({
  fontSize: 13,
  color: '#EEC1D3',
  fontFamily: bold ? 'Merriweather-Bold' : 'Merriweather',
});

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
    fontSize: 16,
    color: '#EABDD7',
    fontFamily: 'Merriweather-Bold',
  },
  passwordContainer: {
    marginTop: 20,
  },
  loginButtonStyle: {
    borderWidth: 1,
    borderColor: '#CB568E',
    width: ScreenWidth * 0.9,
    height: 65,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#CC538C',
    fontSize: 19,
    fontFamily: 'Merriweather-Bold',
  },
  forgotButtonStyle: {
    flexDirection: 'row',
    marginTop: 24,
  },
  dividerStyle: {
    backgroundColor: '#EABDD7',
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
    color: '#EABDD7',
    fontFamily: 'Merriweather-Bold',
    fontSize: 18,
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
    color: '#EABDD7',
    fontSize: 16,
    marginLeft: 8,
  },
});
