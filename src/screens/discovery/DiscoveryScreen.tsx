import React, {useEffect, useRef, useState} from 'react';
import {Alert, FlatList, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
/**
 * ? Local Imports
 */
import styles from './DiscoveryScreen.style';
import {fetchDiscoveryData} from '../../services/api';
import Header from '../../shared/components/header/Header';
import {DISCOVERY_DATA} from '../../shared/constants/mock-data';
import SearchBar from '../../shared/components/search-bar/SearchBar';
import GridContainer from '../../shared/components/grid-container/GridContainer';

interface IDiscoveryScreen {}

const DiscoveryScreen: React.FC<IDiscoveryScreen> = ({}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [postList, setPostList] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    fetchDiscoveryData()
      .then((data: any) => data && setPostList(data))
      .catch(() => Alert.alert('Alert', 'Something went wrong 😭'));
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

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
    const newData: any = DISCOVERY_DATA.filter(item => {
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
