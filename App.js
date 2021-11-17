'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <><View style={{ padding: 2 }}>
        <Text style={styles.header}>Chairiandita Sheilla 1810502</Text>
      </View>
      <View style={styles.container}>
          <View style={[styles.box, { backgroundColor: "darkorange" }]} />
          <View style={[styles.box, { backgroundColor: "gold" }]} />
          <View style={[styles.box, { backgroundColor: "darksalmon" }]} />
        </View></>     
    );
  }
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between', //center for output 1
    alignItems: 'flex-end', //center for output 1
    backgroundColor:'#F5FCFF',
  },
  header: {
    marginTop: 20,
    fontSize: 30,
    textAlign:'center',
    margin: 10,
  },
  box: {
    width: 100,
    height: 100,
  }
});