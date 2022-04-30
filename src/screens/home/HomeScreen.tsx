import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
/**
 * ? Local Imports
 */
import Header from '../../shared/components/header/Header';
import SearchBar from '../../shared/components/search-bar/SearchBar';
import styles from './HomeScreen.style';
import {USER_DATA} from '../../shared/constants/mock-data';
import Post from '../../shared/components/post/Post';
import {SCREENS} from '../../shared/constants';

interface IHomeScreen {
  navigation: any;
}

const HomeScreen: React.FC<IHomeScreen> = ({navigation}) => {
  const renderPostList = () => (
    <FlatList
      data={USER_DATA}
      style={{marginTop: 8}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 60}}
      renderItem={({item}) => <Post userData={item} />}
    />
  );
  return (
    <SafeAreaView>
      <Header />
      <SearchBar onPress={() => navigation.navigate(SCREENS.DISCOVERY)} />
      {renderPostList()}
    </SafeAreaView>
  );
};

export default HomeScreen;
