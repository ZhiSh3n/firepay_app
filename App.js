// Native imports
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Navigation imports
import { createBottomTabNavigator } from 'react-navigation';

// Icon imports
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import screens
import HomeStack from './src/HomeStack';
import Search from './src/Search';
import Add from './src/Add';
import Heart from './src/Heart';
import Profile from './src/Profile';

export default createBottomTabNavigator({
  Home: { screen: HomeStack },
  Search: { screen: Search },
  Add: { screen: Add },
  Heart: { screen: Heart },
  Profile: { screen: Profile },
}, {
  initialRouteName: 'Home',
  // order:
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'black',
    // activeBackgroundColor: 'black',
    // inactiveBackgroundColor: 'black',
    showLabel: false,
    // showIcon: false,
    style: {
      borderTopWidth: 1,
      borderTopColor: 'grey',
    },
    // tabStyle: { backgroundColor: 'blue', },
    // labelStyle: {},
  },
  navigationOptions: ({ navigation }) => ({
    // tabBarVisible: false,
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      // Uses ECMAScript 6 Template Literals to create variable strings
      if (routeName === 'Home') {
        iconName = `home${focused ? '' : '-outline'}`;
        return <MaterialCommunityIcons name={iconName} size={40} color={tintColor} />;
      } else if (routeName === 'Search') {
        iconName = `ios-search${focused ? '' : '-outline'}`;
        return <Ionicons name={iconName} size={40} color={tintColor} />;
      } else if (routeName === 'Add') {
        iconName = `ios-add-circle${focused ? '' : '-outline'}`;
        return <Ionicons name={iconName} size={40} color={tintColor} />;
      } else if (routeName === 'Heart') {
        iconName = `md-heart${focused ? '' : '-outline'}`;
        return <Ionicons name={iconName} size={40} color={tintColor} />;
      } else if (routeName === 'Profile') {
        iconName = `person${focused ? '' : '-outline'}`;
        return <MaterialIcons name={iconName} size={40} color={tintColor} />;
      }
    },
  }),
});
