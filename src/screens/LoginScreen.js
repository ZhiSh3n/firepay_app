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

class LoginScreen extends Component {

  // Change header options!
  static navigationOptions = {
    //header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.defaultButton}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text
            style={styles.defaultButtonText}>
            Home
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultButton: {
    zIndex: 10,
    backgroundColor: 'green',
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  defaultButtonText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 1,
  },
});
