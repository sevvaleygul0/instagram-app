import React, {useRef, useState} from 'react';
import {View, Animated, Text, Dimensions, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import GridContainer from '../../shared/components/grid-container/GridContainer';
import Header from '../../shared/components/header/Header';
import SearchBar from '../../shared/components/search-bar/SearchBar';
import {DISCOVERY_DATA} from '../../shared/constants/mock-data';
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

  const renderListItem = (item: any) => <GridContainer data={item} />;

  const renderDiscoveryList = () => (
    <FlatList
      style={styles.listStyle}
      data={DISCOVERY_DATA}
      numColumns={3}
      renderItem={({item}) => renderListItem(item)}
    />
  );

  return (
    <SafeAreaView>
      <Header />
      <SearchBar
        inputRef={inputRef}
        onPress={() => {
          inputRef.current?.focus();
        }}
      />
      {renderDiscoveryList()}
    </SafeAreaView>
  );
};

export default DiscoveryScreen;
