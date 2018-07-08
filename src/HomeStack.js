import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Easing, Animated} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import HomeStackHome from './HomeStackHome';
import HomeStackDirect from './HomeStackDirect';
import HomeStackCamera from './HomeStackCamera';

export default createStackNavigator({
  HomeStackHome: { screen: HomeStackHome },
  HomeStackDirect: { screen: HomeStackDirect },
  HomeStackCamera: { screen: HomeStackCamera },
}, {
  mode: 'card',
  headerMode: 'screen',
  headerTransitionPreset: 'fade-in-place',
  navigationOptions: {
    gesturesEnabled: true,
  },
  transitionConfig: () => ({ // Remove transitionConfig for default animations
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      // Get parent routeName
      // const routeName = scene.route.routeName;
      const { index, route } = scene;
      const params = route.params || {};
      const transition = params.transition || 'default';
      let FadeTransition = (index, position) => {
        const opacity = position.interpolate({
          inputRange: [index - 1, index],
          outputRange: [0, 1],
        });
        return { opacity };
      };
      let OtherTransition = (index, position) => {
        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index],
          outputRange: [width, 0],
        });
        return { transform: [{ translateX }] };
      };
      // For X Translation
      /*
      const width = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [width, 0],
      });
      return { transform: [{ translateX }] };*/
      return {
        myCustomTransition: OtherTransition(index, position),
        default: FadeTransition(index, position),
      }[transition];
      // For Fade Translation
      /* const opacity = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [0, 1],
      });
      return { opacity }; */
      // For Y Translation with Opacity
      /* const height = layout.initHeight;
      const translateY = position.interpolate({
        // Having the third element makes previous page not move
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      });
      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });
      return { opacity, transform: [{ translateY }] }; */
    },
  }),
});
