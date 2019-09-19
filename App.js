import React,{useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function App(){
  const[defaultText, changedText] = useState('Welcome to the React Native app');
  return(
    <View style={styles.container}>
      <Text>{defaultText}</Text>
      <Button title='Change the Text' onPress={()=>changedText('Let\'s get started')}/>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
});