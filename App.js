import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
    backgroundColor: '#fff'
  },
});
