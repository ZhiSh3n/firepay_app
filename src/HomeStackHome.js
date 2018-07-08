import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


type Props = {};
export default class HomeStackHome extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Instagram',
      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.navigate({
            routeName: 'HomeStackCamera',
          })}
          style={styles.headerLeftStyle}>
          <Feather name={'camera'} size={35} color={'black'} />
        </TouchableOpacity>
      ),
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf:'center',
        flexGrow:1,
      },
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate({
            routeName: 'HomeStackDirect',
            params: {
              transition: 'myCustomTransition',
            },
          })}
          style={styles.headerRightStyle}>
          <FontAwesome name={'paper-plane-o'} size={30} color={'black'} />
        </TouchableOpacity>
      ),
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('HomeStackDirect')}>
          <Text>
            Direct
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerLeftStyle: {
    marginLeft: 15,
  },
  headerRightStyle: {
    marginRight: 15,
  },
});
