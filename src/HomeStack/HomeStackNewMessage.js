import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {};
export default class HomeStackNewMessage extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerContainer}>
          <Text style={styles.whiteText}>
            skyblue
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    fontSize: 20,
    color: 'white',
  },
  headerLeftStyle: {
    marginLeft: 15,
  },
  headerRightStyle: {
    marginRight: 15,
  },
});
