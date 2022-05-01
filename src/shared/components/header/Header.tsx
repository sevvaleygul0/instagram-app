import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Image from 'react-native-fast-image';
/**
 * ? Local Imports
 */
import styles from './Header.style';

interface IHeaderProps {
  onPlusButton?: () => void;
  onLikeButton?: () => void;
  onDirectMessageButton?: () => void;
}

const Header: React.FC<IHeaderProps> = ({
  onPlusButton,
  onLikeButton,
  onDirectMessageButton,
}) => {
  const renderInstagramName = () => (
    <Image
      style={styles.igLogoStyle}
      tintColor="#111"
      source={require('../../../assets/icons/header/ig-logo.png')}
      resizeMode={Image.resizeMode.contain}
    />
  );
  const renderPlusButton = () => (
    <TouchableOpacity style={styles.rightbuttonStyle} onPress={onPlusButton}>
      <Image
        style={styles.buttonIconStyle}
        source={require('../../../assets/icons/header/plus.png')}
        resizeMode={Image.resizeMode.contain}
      />
    </TouchableOpacity>
  );

  const renderHeartButon = () => (
    <TouchableOpacity style={styles.rightbuttonStyle} onPress={onLikeButton}>
      <Image
        style={styles.buttonIconStyle}
        source={require('../../../assets/icons/header/heart.png')}
        resizeMode={Image.resizeMode.contain}
      />
    </TouchableOpacity>
  );

  const renderDirectMessageButton = () => (
    <TouchableOpacity
      style={styles.rightbuttonStyle}
      onPress={onDirectMessageButton}>
      <Image
        style={styles.buttonIconStyle}
        source={require('../../../assets/icons/header/dm.png')}
        resizeMode={Image.resizeMode.contain}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderInstagramName()}
      <View style={styles.rightButtonsContainer}>
        {renderPlusButton()}
        {renderHeartButon()}
        {renderDirectMessageButton()}
      </View>
    </View>
  );
};

export default Header;
