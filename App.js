import React from 'react';
import {ActivityIndicator, Text, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default App=()=> {  
    return (
      <SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Icon name='music' size={72} color="green" />
      </SafeAreaView>
    )
  }