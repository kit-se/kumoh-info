import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});


export default class EtcScreen extends React.Component {
  static navigationOptions = {
    title: null,
  };
  render() {
    return (
      <ScrollView style={styles.container} >
        <Text>sss </Text>
      </ScrollView>
    );
  }
}
