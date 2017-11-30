/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  Button,
  NavigatorI
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class MyButton extends Component{
  render() {
    return(
      <View srtyle={styles.button}>
        <Text styles={styles.buttonText}>{this.props.label}</Text>
      </View>
      );
  }
}

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome, Vineeth Xavier
        </Text>
        
        <TouchableOpacity onPress={() => this.animate()}>
          <MyButton label = "Log Out!" />
        </TouchableOpacity>
      
        <TouchableOpacity onPress={() => this.animateNext()}>
          <MyButton label = "Next Page!" />
        </TouchableOpacity>
        
      </View>
    );
  }
    animate(){
      console.log("button pressed")
      Alert.alert('Successfully Logged out!')
  }
  animateNext(){
    Alert.alert('Next page')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF99FF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
