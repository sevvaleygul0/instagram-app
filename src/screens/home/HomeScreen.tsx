import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
/**
 * ? Local Imports
 */
import Header from '../../shared/components/header/Header';
import SearchBar from '../../shared/components/search-bar/SearchBar';
import styles from './HomeScreen.style';

interface IHomeScreen {}

const HomeScreen: React.FC<IHomeScreen> = ({}) => {
  return (
    <SafeAreaView>
      <Header />
      <SearchBar />
    </SafeAreaView>
  );
};

export default HomeScreen;
