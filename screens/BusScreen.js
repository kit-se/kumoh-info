/* eslint no-console: 0 */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { Button, Grid, Row, Col, Card } from 'react-native-elements';

import SocialColors from '../constants/SocialColors';


const styles = StyleSheet.create({
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
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 480
  }
});
export default class BusScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        isWorking: false
      }
  }
  _handlerGumiStationBusInfo = () => {
    this.setState({isLoading: true});
      fetch('http://localhost:3000/api/businfo/0')
          .then((response) => response.json())
          .then((responseJson) => {
              this.setState({
                isLoading: false,
                dataSource: responseJson
              }, function() {});
          })
          .catch((error) => {});
  };
  _handlerKitBusInfo = () => {
    this.setState({isLoading: true});
    fetch('http://localhost:3000/api/businfo/1')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {});
      })
      .catch((error) => {
      });
  };
  _handlerIndongBusInfo = () => {
    this.setState({isLoading: true});
    fetch('http://localhost:3000/api/businfo/2')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {});
      })
      .catch((error) => {
      });
  };
  _handlerOkgyeBusInfo = () => {
    this.setState({isLoading: true});
    fetch('http://localhost:3000/api/businfo/3')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
        });
      })
      .catch((error) => {

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
                        <ActivityIndicator
                          animating={this.state.animating}
                          style={styles.activityIndicator}
                          size="large"
                        />
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
                    {item.arrive_desc.map((iitem, i) =>
                      <Text style={styles.fonts} key = {i} >{iitem.bus_no} {iitem.time} {iitem.location}</Text>
                    )}
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
