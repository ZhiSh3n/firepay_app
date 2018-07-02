import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
// Ignore isMounted() deprecated warning
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppStackNavigator />
    );
  }
};

const AppStackNavigator = createStackNavigator ({
  Login: LoginScreen,
  Home: HomeScreen
});
