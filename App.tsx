import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from './src/services/navigation';
LogBox.ignoreLogs([]);

const App = () => {
  return (
    <>
      <SafeAreaProvider style={{flex: 1}}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        <Navigation />
      </SafeAreaProvider>
    </>
  );
};

export default App;
