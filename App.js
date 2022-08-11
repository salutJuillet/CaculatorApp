import React from 'react';
import { StyleSheet, View } from 'react-native';
import Caculator from './components/Caculator';

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
    backgroundColor: '#EFF3F4'
  },
});
