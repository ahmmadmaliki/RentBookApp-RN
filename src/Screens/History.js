import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import historyImg from '../Components/Images/history.png';

class History extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.screen}>
        <Image source={historyImg} />
        <Text style={styles.notice}>The History is Empty!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notice: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 18,
    lineHeight: 23,
    color: '#303031',
  },
});

export default History;