import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

// Ignore isMounted() deprecated warning
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class HomeScreen extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

class Page extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.defaultButton}
        onPress={() => this.props.navigation.goBack()}>
        <Text
          style={styles.defaultButtonText}>
          GoBack
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.defaultButton}
        onPress={() => this.props.navigation.popToTop()}>
        <Text
          style={styles.defaultButtonText}>
          PopToTop
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.defaultButton}
        onPress={() => this.props.navigation.navigate('ExtraScreen')}>
        <Text
          style={styles.defaultButtonText}>
          Extra
        </Text>
      </TouchableOpacity>
      </View>
    );
  }
};

class Extra extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
        hi
        </Text>
      </View>
    );
  }
};

const AppStackNavigator = createStackNavigator({
  PageScreen: Page,
  ExtraScreen: Extra,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
