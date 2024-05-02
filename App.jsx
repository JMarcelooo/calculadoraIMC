import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Imc from './src/screens/Imc'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Calculadora IMC</Text>
      <View style={styles.imcDiv}>
        <Imc/>
      </View>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imcDiv:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

 mainTitle:{
      justify: 'top',
      fontSize: 30,
      textAlign: 'center',
      paddingTop: 80,
      fontWeight: 'bold',
    },
});
