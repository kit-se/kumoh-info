/* eslint no-console: 0 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { Button, Grid, Row, Col, Card } from 'react-native-elements';

import SocialColors from '../constants/SocialColors';


const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
  Button: {
    marginTop: 15,
    paddingTop: 10,
    width: 100,
  },
  contentContainer: {
    paddingTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gumiStation: {
    backgroundColor: SocialColors.facebook,
  },
  indong: {
    backgroundColor: SocialColors.instagram,
  },
  kit: {
    backgroundColor: SocialColors.linkedin,
  },
  oggye: {
    backgroundColor: SocialColors.tumblr,
  },
});
export default class BusScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
      super(props);
      this.state = {
          isLoading: true
      }
  }
  _handlerGumiStationBusInfo = () => {
      fetch('http://localhost:3000/api/businfo/0')
          .then((response) => response.json())
          .then((responseJson) => {
              this.setState({
                  isLoading: false,
                  dataSource: responseJson,
              }, function() {
              });
          })
          .catch((error) => {
              console.error(error);
      });
  };
  _handlerKitBusInfo = () => {
    fetch('http://localhost:3000/api/businfo/1')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function() {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  _handlerIndongBusInfo = () => {
    fetch('http://localhost:3000/api/businfo/2')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function() {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  _handlerOkgyeBusInfo = () => {
    fetch('http://localhost:3000/api/businfo/3')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function() {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
      if (this.state.isLoading) {
          return (
              <View style={styles.container}>
                  <Grid containerStyle={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingTop: 50,
                      backgroundColor: '#95DEE3'
                  }}
                  >
                      <Col size={25} containerStyle={{marginBottom: 10}}>
                          <Row>
                              <Button
                                  title="구미역으로"
                                  backgroundColor={SocialColors.facebook}
                                  borderRadius={5}
                                  buttonStyle={styles.Button}
                                  onPress={this._handlerGumiStationBusInfo}
                              />
                              <Button
                                  title="금오공대로"
                                  backgroundColor={SocialColors.linkedin}
                                  borderRadius={5}
                                  buttonStyle={styles.Button}
                                  onPress={this._handlerKitBusInfo}
                              />
                          </Row>
                          <Row>
                              <Button
                                  title="인동으로"
                                  backgroundColor={SocialColors.instagram}
                                  borderRadius={5}
                                  buttonStyle={styles.Button}
                                  onPress={this._handlerIndongBusInfo}
                              />
                              <Button
                                  title="옥계로"
                                  backgroundColor={SocialColors.tumblr}
                                  borderRadius={5}
                                  buttonStyle={styles.Button}
                                  onPress={this._handlerOkgyeBusInfo}
                              />
                          </Row>
                      </Col>
                      <Row size={75}>
                      </Row>
                  </Grid>
              </View>
          );
      }
      else {
        return (
          <View style={styles.container}>
          <Grid containerStyle={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              paddingTop: 50,
              backgroundColor: '#95DEE3'
          }}
          >
            <Col size={25} containerStyle={{marginBottom: 10}}>
              <Row>
                <Button
                  title="구미역으로"
                  backgroundColor={SocialColors.facebook}
                  borderRadius={5}
                  buttonStyle={styles.Button}
                  onPress={this._handlerGumiStationBusInfo}
                />
                <Button
                  title="금오공대로"
                  backgroundColor={SocialColors.linkedin}
                  borderRadius={5}
                  buttonStyle={styles.Button}
                  onPress={this._handlerKitBusInfo}
                />
              </Row>
              <Row>
                <Button
                  title="인동으로"
                  backgroundColor={SocialColors.instagram}
                  borderRadius={5}
                  buttonStyle={styles.Button}
                  onPress={this._handlerIndongBusInfo}
                />
                <Button
                  title="옥계로"
                  backgroundColor={SocialColors.tumblr}
                  borderRadius={5}
                  buttonStyle={styles.Button}
                  onPress={this._handlerOkgyeBusInfo}
                />
              </Row>
            </Col>
            <Row size={75}>
              <FlatList
                keyExtractor={(item, index) => item.bus_station}
                data= {this.state.dataSource}
                renderItem={({item}) =>
                  <Card containerStyle={{ marginTop: 15 }} title={item.station_name}>
                    <Text style={styles.fonts} h1>{item.arrive_desc}</Text>
                  </Card>
                  }
              />
            </Row>
          </Grid>
        </View>
        );
      }
  }
}
