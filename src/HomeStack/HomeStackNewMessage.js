import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {};
export default class HomeStackNewMessage extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Huh
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
    backgroundColor: 'green',
  },
  headerLeftStyle: {
    marginLeft: 15,
  },
  headerRightStyle: {
    marginRight: 15,
  },
});
