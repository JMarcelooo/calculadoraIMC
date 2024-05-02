import { TextInput, View, Text, Button, StyleSheet } from "react-native"

export default function EntradaTexto(props){
    return(
        <View>
            <Text style={styles.labelStyle}>{props.label}</Text>
            <View style={styles.inputStyle}>
                <TextInput placeholder={props.label} onChangeText={props.setValue} keyboardType="number-pad"></TextInput>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    labelStyle:{
        color: "#000",
        fontSize: 15,
        textAlign: 'center',
        
      },
      inputStyle:{
        borderWidth: 2,
        borderColor: "#200",
        width: 150,
        marginBottom: 20,
        
      },


});

