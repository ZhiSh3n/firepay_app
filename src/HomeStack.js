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
  // For default animations, remove transitionConfig entirely
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      // Get parent routeName: const routeName = scene.route.routeName;
      const { index, route } = scene;
      // Additions for per-screen transitions
      const params = route.params || {};
      const transition = params.transition || 'default';
      // Default per-screen transition
      let FadeTransition = (index, position) => {
        const opacity = position.interpolate({
          inputRange: [index - 1, index],
          outputRange: [0, 1],
        });
        return { opacity };
      };
      // Right-side per-screen transition
      let SwipeLeft = (index, position) => {
        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index],
          outputRange: [width, 0],
        });
        return { transform: [{ translateX }] };
      };
      // Left-side per-screen transition
      let SwipeRight = (index, position) => {
        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index],
          outputRange: [-width, 0],
        });
        return { transform: [{ translateX }] };
      };
      // Return all transitions
      return {
        swipeLeft: SwipeLeft(index, position),
        swipeRight: SwipeRight(index, position),
        default: FadeTransition(index, position),
      }[transition];
      // TODO Note:
      //    Using the trick above to get per-screen transitions is slightly
      //    buggy. There are small differences in transitions between using
      //    the method above and the method below. Until a proper method
      //    is implemented for per-screen transitions, you will need to decide
      //    between the importance of "proper-looking" transitions and
      //    the need for per-screen animations.
      // For Fade Translation
      /* const opacity = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [0, 1],
      });
      return { opacity }; */
      // For X Translation
      /*
      const width = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [width, 0],
      });
      return { transform: [{ translateX }] };*/
      // For Y Translation With Opacity
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
