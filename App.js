import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Caculator from './components/CaculatorApp';






export default function App() {

  return (
    <SafeAreaView style={st.container}>
      <Caculator />
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff3f4'
  },
});
