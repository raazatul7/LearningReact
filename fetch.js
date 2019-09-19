import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  sendHttpRequest=()=> {
    console.log('btn pressed')
    fetch('https://reqres.in/api/users',{
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'morpheus',
        job: 'leader'
      })
    })
    .then(response => {
      return response.json();
    })
    .then(responseData=>{
      console.log(responseData);
    }).catch(error=>{
      console.log(error);
    })
    }

  render() {
    return (
      <View>
        <Text> Get API using fetch </Text>
        <Button title="Get data" onPress={this.sendHttpRequest.bind(this)}/>
      </View>
    );
  }
}




