import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from './src/services/navigation';

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
