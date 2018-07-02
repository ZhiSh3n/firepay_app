import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

// Import navigation
import { createBottomNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation';

// Import screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

// Ignore isMounted() deprecated warning
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#f2f2f2'}}>
        <AppTabNavigator />
      </SafeAreaView>
    )
  }
};


class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Set</Text>
      </View>
    );
  }
};

const AppTabNavigator = createMaterialTopTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
    }
  },
}, {
  initialRouteName: 'Home',
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: '#f2f2f2',
    },
    indicatorStyle: {
      backgroundColor: 'black',
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
