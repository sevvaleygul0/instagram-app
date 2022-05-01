import React, {useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
/**
 * ? Local Imports
 */
import styles from './DiscoveryScreen.style';
import useAPI from '../../services/hook/useApi';
import Header from '../../shared/components/header/Header';
import {DISCOVERY_DATA} from '../../shared/constants/mock-data';
import SearchBar from '../../shared/components/search-bar/SearchBar';
import GridContainer from '../../shared/components/grid-container/GridContainer';
import {IDiscoveryData} from '../../services/models';

interface IDiscoveryScreen {}

const DiscoveryScreen: React.FC<IDiscoveryScreen> = ({}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const {
    setDiscoveryList,
    backupDiscoveryList,
    discoveryList,
    fetchDiscoveryList,
  } = useAPI();

  const inputRef = useRef();

  useEffect(() => {
    fetchDiscoveryList();
  }, []);

  const onChangeSearchText = (text: string) => {
    const newData: IDiscoveryData[] = backupDiscoveryList.filter(item => {
      const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setDiscoveryList(newData);
    setSearchValue(text);
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const renderListItem = (item: IDiscoveryData) => (
    <GridContainer data={item} />
  );
  const renderDiscoveryList = () => (
    <FlatList
      style={styles.listStyle}
      data={discoveryList}
      numColumns={3}
      renderItem={({item}) => renderListItem(item)}
    />
  );

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
