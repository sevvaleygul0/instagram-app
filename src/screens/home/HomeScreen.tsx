import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
/**
 * ? Local Imports
 */
import styles from './HomeScreen.style';
import {SCREENS} from '../../shared/constants';
import useAPI from '../../services/hook/useApi';
import Post from '../../shared/components/post/Post';
import Header from '../../shared/components/header/Header';
import SearchBar from '../../shared/components/search-bar/SearchBar';

interface IHomeScreen {
  navigation: any;
}

const HomeScreen: React.FC<IHomeScreen> = ({navigation}) => {
  const {postList, fetchPostList} = useAPI();

  useEffect(() => {
    fetchPostList();
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  const renderPostList = () => {
    return (
      <FlatList
        data={postList}
        style={styles.listStyle}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
        renderItem={({item}) => <Post userData={item} />}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar onPress={() => navigation.navigate(SCREENS.DISCOVERY)} />
      {renderPostList()}
    </SafeAreaView>
  );
};

export default HomeScreen;
