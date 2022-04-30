import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-fast-image';

/**
 * ? Local Imports
 */
import styles from './Post.style';
import ImageSwiper from './image-swiper/ImageSwiper';

interface IPostProps {
  userData: any;
  onPressTranslation?: () => void;
}

const Post: React.FC<IPostProps> = ({userData, onPressTranslation}) => {
  const {name, profilePhoto, postDetail, likes, comments} = userData;

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Image
        style={styles.profileImageStyle}
        source={profilePhoto}
        resizeMode="cover"
      />
      <View style={styles.usernameContainer}>
        <Text style={styles.usernameTextStyle}>{name}</Text>
      </View>
      <TouchableOpacity style={styles.headerRightButton}>
        <Image
          style={styles.dotImageStyle}
          source={require('../../../assets/icons/post/dots.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );

  const renderSwiper = () => (
    <ImageSwiper
      imageHeight={350}
      onSwipeTop={() => alert('onSwipeTop')}
      onSwipeBottom={() => alert('onSwipeBottom')}
      images={postDetail}
    />
  );

  const renderIconButtonsContainer = () => (
    <View style={styles.iconButtonsContainer}>
      <TouchableOpacity style={styles.iconButtonStyle}>
        <Image
          style={styles.iconButtonImageStyle}
          source={require('../../../assets/icons/header/heart.png')}
          resizeMode={Image.resizeMode.contain}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButtonStyle}>
        <Image
          style={styles.iconButtonImageStyle}
          source={require('../../../assets/icons/post/chat-bubble.png')}
          resizeMode={Image.resizeMode.contain}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButtonStyle}>
        <Image
          style={styles.iconButtonImageStyle}
          source={require('../../../assets/icons/post/dm.png')}
          resizeMode={Image.resizeMode.contain}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveIconButtonStyle}>
        <Image
          style={styles.iconButtonImageStyle}
          source={require('../../../assets/icons/post/save.png')}
          resizeMode={Image.resizeMode.contain}
        />
      </TouchableOpacity>
    </View>
  );

  const renderLikeNumber = () => (
    <TouchableOpacity style={styles.likeNumberButton}>
      <Text style={styles.likeNumberTextStyle}>{likes.toString()} likes</Text>
    </TouchableOpacity>
  );

  const renderComments = () => (
    <TouchableOpacity>
      <Text style={styles.commentButtonTextStyle}>
        {`View all ${comments} comments`}
      </Text>
    </TouchableOpacity>
  );

  const renderCurrentUserComment = () => (
    <View style={styles.currentUserCommentContainer}>
      <Image
        style={styles.currentUserProfilePhoto}
        source={profilePhoto}
        resizeMode="cover"
      />
      <TouchableOpacity style={styles.addCommentButton}>
        <Text style={styles.addCommentText}>Add a comment...</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{marginLeft: 'auto', paddingRight: 20}}>
        <Image
          style={styles.userActionButtonImage}
          source={require('../../../assets/icons/post/love.png')}
          resizeMode={Image.resizeMode.contain}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{paddingRight: 20}}>
        <Image
          style={styles.userActionButtonImage}
          source={require('../../../assets/icons/post/raise-hand.png')}
          resizeMode={Image.resizeMode.contain}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{paddingRight: 12}}>
        <Image
          style={styles.userAddEmojiButton}
          source={require('../../../assets/icons/post/add-comment.png')}
          resizeMode={Image.resizeMode.contain}
        />
      </TouchableOpacity>
    </View>
  );

  const renderTimeAndTranslationContainer = () => (
    <View style={styles.timeAndTranslationContainer}>
      <Text style={styles.timeTextStyle}>23 mminitus ago</Text>
      <View style={styles.dotStyle} />
      <TouchableOpacity onPress={onPressTranslation}>
        <Text style={styles.seeTranslation}>See translation</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderSwiper()}
      {renderIconButtonsContainer()}
      {renderLikeNumber()}
      {renderComments()}
      {renderCurrentUserComment()}
      {renderTimeAndTranslationContainer()}
    </View>
  );
};

export default Post;
