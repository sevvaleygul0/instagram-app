import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {USER_DATA} from '../../constants/mock-data';
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

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderSwiper()}
    </View>
  );
};

export default Post;
