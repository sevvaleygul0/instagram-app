import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 8,
  },
  headerContainer: {
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderColor: '#adadad',
    flexDirection: 'row',
    paddingLeft: 12,
    padding: 4,
    alignItems: 'center',
  },
  profileImageStyle: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  usernameTextStyle: {
    fontFamily: 'Merriweather-Bold',
  },
  usernameContainer: {
    marginLeft: 12,
  },
  headerRightButton: {
    marginLeft: 'auto',
    paddingRight: 12,
  },
  dotImageStyle: {
    width: 24,
    height: 24,
  },
  iconButtonsContainer: {
    marginTop: 12,
    flexDirection: 'row',
    paddingLeft: 12,
  },
  iconButtonStyle: {
    marginRight: 16,
  },
  saveIconButtonStyle: {
    marginLeft: 'auto',
    paddingRight: 12,
  },
  likeNumberTextStyle: {
    fontFamily: 'Merriweather-Bold',
    fontSize: 12,
    color: '#111',
  },
  likeNumberButton: {
    marginTop: 12,
    paddingLeft: 12,
  },
  commentButtonTextStyle: {
    fontFamily: 'Merriweather',
    fontSize: 12,
    color: '#adadad',
    marginTop: 4,
    paddingLeft: 12,
  },
});
