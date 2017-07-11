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
  getInitialState = () => ({
    initialPosition: 'unknown',
    lastPosition: 'unknown',
  });

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = JSON.stringify(position);
        this.setState({ initialPosition });
      },
      (error) => {
        alert(JSON.stringify(error));
      }, {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      });
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const lastPosition = JSON.stringify(position);
      this.setState({ lastPosition });
    });
  };

  componentWillUnmount = () => {
    navigator.geolocation.clearWatch(this.watchID);
  };

  render() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {this.state.lastPosition}
        </Text>
      </View>
    );
  }
}
