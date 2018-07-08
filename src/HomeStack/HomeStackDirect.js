import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class HomeStackDirect extends Component<Props> {
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity
          onPress={() => navigation.navigate({
            routeName: 'HomeStackNewMessage',
            params: {
              transition: 'swipeLeft',
            },
          })}
          style={styles.headerRightStyle}>
          <MaterialIcons name={'add'} size={30} color={'black'} />
        </TouchableOpacity>
      ),
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Profile
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  headerLeftStyle: {
    marginLeft: 15,
  },
  headerRightStyle: {
    marginRight: 15,
  },
});
