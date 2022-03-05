import { StyleSheet, Text, View } from 'react-native';

import CartelaBingo from './components/CartelaBingo';
import CartelaVetor from './components/CartelaVetor';
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

  //const cartelaVetor = [5,10,6,2,3,4,1]
  

  
  return (
    <View style={styles.container}>
      <Text>teste no dia tal</Text>
      <StatusBar style="auto" />
      <CartelaBingo cartela = {cartela}></CartelaBingo>
      <CartelaVetor /*cartelaVetor = {cartelaVetor}*/></CartelaVetor>
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
