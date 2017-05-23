import React, { Component } from 'react';
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';
import {Image } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import Button from 'react-native-button'

export const DetailStack = StackNavigator({
  Detail: { screen: DetailScreen }
});

export const Root = StackNavigator({
  Home: { screen: HomeScreen },
  Detail: {screen: DetailScreen},
}, {
  mode: 'modal',
  headerMode: 'none',
});