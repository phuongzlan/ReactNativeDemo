import React, { Component } from 'react';
import { AppRegistry,
        View,
        Text,
        StyleSheet,
        Image,
        StatusBar,
        ScrollView
} from 'react-native';

import moment from "moment";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';

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

import styles from '../../style';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: moment().format("h:mm"),
      date: moment().format("dddd, MMMM D"),
      ampm: moment().format("A")
    };
    setInterval(() => {
      this.setState({
        time: moment().format("h:mm"),
        date: moment().format("dddd, MMMM D"),
        appm: moment().format("A")
      });
    }, 1000);
  };
  static navigationOptions = {
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <LinearGradient colors={['#00537d', '#00bdb7']} style={styles.linearGradient}>
        <View style={styles.contentCenter}>
          <Image source={require('../../img/survey-icon-white.png')} style={styles.surveyIconLarge} />
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Daily Survey
          </Text>
          <StatusBar style={{backgroundColor: 'transparent'}} />
          <View style={{flexDirection: 'row'}}> 
            <Text style={styles.timeText}>
              {this.state.time}
            </Text>
            <Text style={{fontSize: 14, marginTop: 37, fontWeight: 'bold'}}>{this.state.ampm} </Text>
          </View>
          <Text style={styles.nomoralText}>
            {this.state.date}
          </Text>
          <View style={styles.boxTime}>
            <Text style={styles.nomoralText}>
              Time Remaining Till Next Survey
            </Text>
            <Image source={require('../../img/time_remaining.jpg')} style={styles.timeRemainingIcon} /> 
          </View>
          <Button
            buttonStyle={styles.buttonText} fontSize={19}
            onPress={() => navigate('Detail')} 
            title='Take Survey'
          />
           
          <Text style={styles.nomoralText}>
            Last Entry: 1:00pm yesterday
          </Text>
        </View>
      </LinearGradient>
    );
  }
}

export default HomeScreen;