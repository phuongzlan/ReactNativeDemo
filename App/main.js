import React, { Component } from 'react';
import { AppRegistry,
        View,
        Text,
        StyleSheet,
        Image,
        StatusBar
} from 'react-native';

import moment from "moment";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import {
  StackNavigator,
} from 'react-navigation';
import {
  Button,
  RNECard,
  RNEFormInput,
  RNEFormLabel,
  RNEList,
  RNEListItem,
  RNEPricingCard,
  RNESocialIcon,
  RNEText,
  RNEDivider,
  Icon
} from 'react-native-elements'


import { Root } from './mobiles/config/router';

class App extends Component {
  render() {
    return <Root />;
  }
}

AppRegistry.registerComponent('AwesomeProject', () => App);