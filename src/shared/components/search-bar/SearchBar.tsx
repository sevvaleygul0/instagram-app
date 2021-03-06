import React from 'react';
import {TextInput, View} from 'react-native';
import Image from 'react-native-fast-image';
/**
 * ? Local Imports
 */
import styles from './SearchBar.style';

interface ISearchBarProps {
  value?: string;
  inputRef?: any;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({
  value,
  inputRef,
  onChangeText,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.searchImageStyle}
        source={require('../../../assets/icons/search/search.png')}
        resizeMode={Image.resizeMode.contain}
      />
      <TextInput
        ref={inputRef}
        placeholder="Search"
        value={value}
        placeholderTextColor="#AAAAAA"
        onFocus={onPress}
        onChangeText={onChangeText}
        style={styles.searchBarStyle}
      />
    </View>
  );
};

export default SearchBar;
