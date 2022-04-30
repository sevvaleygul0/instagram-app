import React, {useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import GridContainer from '../../shared/components/grid-container/GridContainer';
import Header from '../../shared/components/header/Header';
import SearchBar from '../../shared/components/search-bar/SearchBar';
import {DISCOVERY_DATA} from '../../shared/constants/mock-data';
/**
 * ? Local Imports
 */
import styles from './DiscoveryScreen.style';

interface IDiscoveryScreen {}

const DiscoveryScreen: React.FC<IDiscoveryScreen> = ({}) => {
  const [searchValue, setSearchValue] = useState<any>();
  const [postList, setPostList] = useState(DISCOVERY_DATA);

  const inputRef = useRef();

  const renderListItem = (item: any) => <GridContainer data={item} />;

  const renderDiscoveryList = () => (
    <FlatList
      style={styles.listStyle}
      data={postList}
      numColumns={3}
      renderItem={({item}) => renderListItem(item)}
    />
  );

  const onChangeSearchText = (text: string) => {
    const newData = DISCOVERY_DATA.filter(item => {
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setPostList(newData);
    setSearchValue(text);
  };

  return (
    <SafeAreaView>
      <Header />
      <SearchBar
        inputRef={inputRef}
        value={searchValue}
        onPress={() => {
          inputRef.current?.focus();
        }}
        onChangeText={onChangeSearchText}
      />
      {renderDiscoveryList()}
    </SafeAreaView>
  );
};

export default DiscoveryScreen;
