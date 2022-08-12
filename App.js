import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Caculator from './components/CaculatorApp';






export default function App() {

  return (
    <View style={st.container}>
      <Caculator />
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    marginTop:25,
    flex: 1,
    backgroundColor: '#eff3f4'
  },
});
