import React, {useRef, useState} from 'react';
import {View, Animated, Text, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../shared/components/header/Header';
import SearchBar from '../../shared/components/search-bar/SearchBar';
/**
 * ? Local Imports
 */
import styles from './DiscoveryScreen.style';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

interface IDiscoveryScreen {}

const DiscoveryScreen: React.FC<IDiscoveryScreen> = ({}) => {
  const [state, setState] = useState<any>();

  const inputRef = useRef();

  return (
    <SafeAreaView>
      <Header />
      <SearchBar
        inputRef={inputRef}
        onPress={() => {
          inputRef.current.focus();
        }}
      />
      <Text>Discovery</Text>
    </SafeAreaView>
  );
};

export default DiscoveryScreen;
