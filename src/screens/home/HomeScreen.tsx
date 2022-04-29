import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
/**
 * ? Local Imports
 */
import Header from '../../shared/components/header/Header';
import styles from './HomeScreen.style';

interface IHomeScreen {}

const HomeScreen: React.FC<IHomeScreen> = ({}) => {
  const [state, setState] = useState<any>();

  return (
    <SafeAreaView>
      <Text>Header:</Text>
      <Header />
    </SafeAreaView>
  );
};

export default HomeScreen;
