import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Image from 'react-native-fast-image';

/**
 * ? Local Imports
 */
import styles from './Post.style';
import ImageSwiper from './image-swiper/ImageSwiper';

interface IPostProps {
  userData: any;
}

const Post: React.FC<IPostProps> = ({userData}) => {
  const {name, profilePhoto, postDetail} = userData;

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Image
        style={styles.profileImageStyle}
        source={profilePhoto}
        resizeMode={Image.resizeMode.contain}
      />
      <View style={styles.usernameContainer}>
        <Text style={styles.usernameTextStyle}>{name}</Text>
      </View>
      <TouchableOpacity style={styles.headerRightButton}>
        <Image
          style={styles.dotImageStyle}
          source={require('../../../assets/icons/post/dots.png')}
          resizeMode={Image.resizeMode.contain}
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
          style={styles.dotImageStyle}
          source={require('../../../assets/icons/header/heart.png')}
          resizeMode={Image.resizeMode.contain}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButtonStyle}>
        <Image
          style={styles.dotImageStyle}
          source={require('../../../assets/icons/post/chat-bubble.png')}
          resizeMode={Image.resizeMode.contain}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButtonStyle}>
        <Image
          style={styles.dotImageStyle}
          source={require('../../../assets/icons/post/dm.png')}
          resizeMode={Image.resizeMode.contain}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveIconButtonStyle}>
        <Image
          style={styles.dotImageStyle}
          source={require('../../../assets/icons/post/save.png')}
          resizeMode={Image.resizeMode.contain}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderSwiper()}
      {renderIconButtonsContainer()}
    </View>
  );
};

export default Post;
