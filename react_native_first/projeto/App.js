import { StyleSheet, Text, View } from 'react-native';

import CartelaBingo from './components/CartelaBingo';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const cartela = [
    {
      numero: 1
    },
    {
      numero: 2
    }
      
  
  ]

  
  return (
    <View style={styles.container}>
      <Text>teste no dia tal</Text>
      <StatusBar style="auto" />
      <CartelaBingo cartela = {cartela}></CartelaBingo>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
