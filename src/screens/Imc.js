import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity,Image } from 'react-native';
import EntradaTexto from '../components/entradaTexto'

export default function Imc() {
    /*Basicamente o useState() serve pra armazenar e usar estados ou valores
    em componentes. Ele retorna 2 valores, o primeiro é o valor do estado e 
    o segundo é uma função que altera ou atualiza o valor daquele estado */
    const [imc, setIMC] = useState()
    const [altura, setAltura] = useState()
    const [peso, setPeso] = useState()
    const [status, setStatus] = useState()

    /**Arrow Function: Basicamente é a atribuição de uma função a uma variável
     * ao chamar a variável calcular ele irá chamar a função, não necessitando
     * colocar ().
     */
    const calcular = () => {
        if(altura || peso){
            const novoIMC = (peso/ (altura*altura)).toFixed(2);
            if(isNaN(novoIMC)){
                return
            }else{
                setIMC(novoIMC);
                if(novoIMC<18.5){
                    setStatus("Abaixo do Peso");
                }else if(novoIMC>=18.5&&novoIMC<24.9){
                    setStatus("Normal")
                }else if(novoIMC>=24.9&&novoIMC<29.9){
                    setStatus("Acima do peso")
                } else {
                    setStatus("Obeso")
                }                   
            }
        }
    }

    return (

        <View style={StyleSheet.container}>        
            <View style={styles.mainDiv}>
                <EntradaTexto setValue={setAltura} label="Altura"></EntradaTexto>
                <EntradaTexto setValue={setPeso} label="Peso"></EntradaTexto>
                <TouchableOpacity onPress={calcular} style={styles.buttonStyle}>
                    <Text style={styles.textbuttonStyle}>Calcular</Text>
                </TouchableOpacity>
                <View>
                    {imc ? (
                        <View>
                            <Text style={styles.valueStyle}>IMC: {imc}</Text>
                            <Text style={styles.statuStyle}>Você está</Text>
                            <Text style={styles.statuStyle}>{status}</Text>
                        </View>
                    ) : null}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',

    },
    buttonStyle:{
      backgroundColor: "#3A5037",
      width: 100,
      borderRadius: 20,
      elevation: 5,
      shadowColor: 'black',
      alignItems: 'center',
      padding: 10,
    },
    textbuttonStyle:{
      color: "#ffff",
    
    },
   
    valueStyle:{
      marginTop:15,
      fontSize: 20, 
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#254B20'
    },

    mainDiv: {
        backgroundColor: '#7CFA6D',
        height: 300,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 9,
        borderRadius: 30,
    },

    statuStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#254B20'
    }
  
  });
