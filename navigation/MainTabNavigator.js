/**
 * @flow
 */

import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import DummyScreen from '../screens/DummyScreen';
import EtcScreen from '../screens/EtcScreen';
import BusScreen from '../screens/BusScreen';

export default TabNavigator(
  {
    Bus: {
      screen: BusScreen,
    },
    Library: {
      screen: DummyScreen,
    },
    Home: {
      screen: HomeScreen,
    },
    Calendar: {
      screen: DummyScreen,
    },
    Etc: {
      screen: EtcScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      // Set the tab bar icon
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Library':
            iconName = 'book';
            break;
          case 'Etc':
            iconName = 'ellipsis-h';
            break;
          case 'Bus':
            iconName = 'bus';
            break;
          case 'Calendar':
            iconName = 'calendar';
        }
        return (
          <FontAwesome
            name={iconName}
            size={32}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    // Put tab bar on bottom of screen on both platforms
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    // Disable animation so that iOS/Android have same behaviors
    animationEnabled: false,
    // Don't show the labels
    tabBarOptions: {
      showLabel: false,
    },
  },
);
