import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingLeft: 12,
    padding: 4,
    height: 50,
    alignItems: 'center',
  },
  profileImageStyle: {
    width: 30,
    height: 30,
    borderRadius: 30,
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
  iconButtonImageStyle: {
    width: 20,
    height: 20,
  },
  currentUserProfilePhoto: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  currentUserCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    marginTop: 12,
  },
  addCommentButton: {
    paddingLeft: 12,
    justifyContent: 'center',
  },
  addCommentText: {
    color: '#adadad',
    fontFamily: 'Merriweather',
    fontSize: 12,
  },
  userActionButtonImage: {
    width: 18,
    height: 18,
  },
  userAddEmojiButton: {
    width: 12,
    height: 12,
  },
  timeTextStyle: {
    paddingLeft: 12,
    color: '#adadad',
    fontFamily: 'Merriweather',
    fontSize: 10,
  },
  timeAndTranslationContainer: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
  },
  dotStyle: {
    backgroundColor: '#111',
    width: 3,
    height: 3,
    borderRadius: 2,
    marginLeft: 8,
  },
  seeTranslation: {
    paddingLeft: 8,
    fontFamily: 'Merriweather-Bold',
    fontSize: 10,
  },
});
