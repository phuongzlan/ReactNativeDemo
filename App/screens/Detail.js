import React, { Component } from 'react';
import { AppRegistry,
        View,
        Text,
        StyleSheet,
        Image,
        StatusBar,
        ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import moment from "moment";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import {
  StackNavigator,
} from 'react-navigation';
import {
  Slider, 
  Icon
} from 'react-native-elements'

import Button from 'react-native-button';
import styles from '../style';
import Home from './Home';

class DetailScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      Questions : [{
        ask : 'Question 1',
        ans : 1
      },{
        ask : 'Question 2',
        ans : 1
      }],
      value: 2,
    };
  };
  static navigationOptions = ({ navigation }) => ({
    headerLeft: 
            <Button style={{color:'black'}} 
              onPress={()=>{
                Home.props.navigation('Home');
              }}>
              <Icon name='keyboard-arrow-left' /> Back </Button>,
    //title: <Image source={require('../img/survey-icon-12.png')} style={{zIndex: 1, height:90, width:90, alignItems: 'center'}} />,
    headerRight: <Button style={{color:'black'}}>
              Next <Icon name='keyboard-arrow-right' /> </Button>,
  });
  
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <LinearGradient colors={['#00537d', '#00bdb7']} style={styles.linearGradient}>  
        <View style={styles.panel}> 

          <Button style={{color:'black'}} 
              onPress={()=>{
                navigate('Home');
              }}>
            <Icon name='keyboard-arrow-left' /> Back 
          </Button>
          <Image source={require('../img/survey-icon-12.png')} style={{height:40, width:40}} />
          <Button style={{color:'black'}}>
            Next <Icon name='keyboard-arrow-right' />
          </Button>
        </View>
        <View style={styles.content}>
          <View style={{height: 60, alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 15}}>
              Question
            </Text>
          </View>
          <ScrollView>
            <View style={styles.boxQuestion}>
              <View style={styles.boxQuestionRow}>
                <Image source={require('../img/questionIcon.png')} style={{height:50, width:50, }} />
                <Text style={styles.titleQuestion}>
                  {this.state.Questions[0].ask}
                </Text>
              </View>
              <View style={styles.boxQuestionRow}>
                <Button style={this.state.Questions[0].ans == 1 ? styles.buttonQuestionSelect: styles.buttonQuestionNotSelect}
                  onPress={()=>{
                    this.state.Questions[0].ans = 1;
                    this.forceUpdate();
                  }}> Yes </Button>
                <Button style={this.state.Questions[0].ans == 0 ? styles.buttonQuestionSelect: styles.buttonQuestionNotSelect}
                  onPress={()=>{
                    this.state.Questions[0].ans = 0;
                    this.forceUpdate();
                  }}
                  > No </Button>
                <Button style={this.state.Questions[0].ans == -1 ? styles.buttonQuestionSelect: styles.buttonQuestionNotSelect}
                  onPress={()=>{
                    this.state.Questions[0].ans = -1;
                    this.forceUpdate();
                  }}
                  > No Change </Button>
              </View>
            </View>
            <View style={styles.boxQuestion}>
              <View style={styles.boxQuestionRow}>
                <Image source={require('../img/questionIcon.png')} style={{height:50, width:50, }} />
                <Text style={styles.titleQuestion}>
                  {this.state.Questions[1].ask}
                </Text>
              </View>
              <View style={styles.boxQuestionRow}>
                <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
                  <View style={{flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-between'}}>
                    <Text style={{color:'black', fontSize: 11}}>Poor </Text>
                    <Text style={{color:'black', fontSize: 11}}> { this.state.Questions[1].ans} </Text>
                    <Text style={{color:'black', fontSize: 11}}>Excellent </Text> 
                  </View>
                  <Slider
                    value={this.state.Questions[1].ans/10}
                    step={0.1}
                    thumbTintColor={'#d6866d'}
                    onValueChange={(value) =>{
                      this.state.Questions[1].ans = parseInt(value*10);
                      this.forceUpdate(); 
                    }} />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    );  
  }
}

export default DetailScreen;