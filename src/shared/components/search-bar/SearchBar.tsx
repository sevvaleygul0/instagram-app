import React from 'react';
import {TextInput, View} from 'react-native';
import Image from 'react-native-fast-image';
/**
 * ? Local Imports
 */
import styles from './SearchBar.style';

interface ISearchBarProps {
  value?: string;
  onChangeText?: () => void;
}

const SearchBar: React.FC<ISearchBarProps> = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.searchImageStyle}
        source={require('../../../assets/icons/search/search.png')}
        resizeMode={Image.resizeMode.contain}
      />
      <TextInput
        placeholder="Search"
        value={value}
        onChangeText={onChangeText}
        style={styles.searchBarStyle}
        placeholderTextColor="#adadad"
      />
    </View>
  );
};

export default SearchBar;
