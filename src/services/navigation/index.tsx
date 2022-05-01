import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home/HomeScreen';
import LoginScreen from '../../screens/login/LoginScreen';
/**
 * ? Local Imports
 */
import {SCREENS} from '../../shared/constants';
import DiscoveryScreen from '../../screens/discovery/DiscoveryScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={SCREENS.LOGIN}
        screenOptions={() => ({
          headerShown: false,
          tabBarStyle: {display: 'none'},
        })}>
        <Tab.Screen name={SCREENS.LOGIN} component={LoginScreen} />
        <Tab.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Tab.Screen name={SCREENS.DISCOVERY} component={DiscoveryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
