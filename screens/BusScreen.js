/* eslint no-console: 0 */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { Button, Grid, Row, Col, Card } from 'react-native-elements';

import Colors from '../constants/Colors';
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
export default class BusScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Grid containerStyle={{ flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          paddingTop: 50,
          backgroundColor: '#95DEE3' }}
        >
          <Col size={25} containerStyle={{ marginBottom: 10 }}>
            <Row>
              <Button
                title="구미역으로"
                backgroundColor={SocialColors.facebook}
                borderRadius={5}
                buttonStyle={styles.Button}
              />
              <Button
                title="금오공대로"
                backgroundColor={SocialColors.linkedin}
                borderRadius={5}
                buttonStyle={styles.Button}
              />
            </Row>
            <Row>
              <Button
                title="인동으로"
                backgroundColor={SocialColors.instagram}
                borderRadius={5}
                buttonStyle={styles.Button}
              />
              <Button
                title="옥계로"
                backgroundColor={SocialColors.tumblr}
                borderRadius={5}
                buttonStyle={styles.Button}
              />
            </Row>
          </Col>
          <Row size={75}>
            <ScrollView>
              <Card containerStyle={{ marginTop: 15 }} title="1" id="fristCard">
                <Text style={styles.fonts} h1>h1 Heading</Text>
              </Card>
              <Card containerStyle={{ marginTop: 15 }} title="2" id="secondCard">
                <Text style={styles.fonts} h1>h1 Heading</Text>
              </Card>
              <Card containerStyle={{ marginTop: 15 }} title="3" id="thirdCard">
                <Text style={styles.fonts} h1>h1 Heading</Text>
              </Card>
            </ScrollView>
          </Row>
        </Grid>

      </View>
    );
  }
}
