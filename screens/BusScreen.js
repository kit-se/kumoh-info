/* eslint no-console: 0 */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});
export default class BusScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>
          기다리는 중
        </Text>
      </View>
    );
  }
}
