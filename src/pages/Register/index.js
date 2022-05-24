import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'

export default function Register(){
    return(
        <SafeAreaView style={style.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={style.containerHeader}>
                <Text style={style.message}>Inscrever-se</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" style={style.containerForm}>
            <TextInput style={style.input} placeholder="Nome" />
            <TextInput style={style.input} placeholder="Sobrenome"/>
            <TextInput style={style.input} placeholder="CPF"/>
            <TextInput style={style.input} placeholder="Email"/>
            <TextInput style={style.input} placeholder="Email novamente"/>
            <TextInput style={style.input} placeholder="Senha"/>
            <TextInput style={style.input} placeholder="Senha novamente"/>
            <TouchableOpacity
                      style={style.buttonRegister}
                >
                <Text style={style.buttonText}>Registrar</Text>
                </TouchableOpacity>

</Animatable.View>


        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    containerHeader:{
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize:28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    input:{
        borderBottomWidth: 1,
        height:40,
        marginBottom: 12,
        fontSize: 16,
    }, 
    buttonRegister:{
        backgroundColor: 'black',
       width: '100%',
       borderRadius: 4,
       paddingVertical: 8,
       marginTop: 14,
       justifyContent: 'center',
       alignItems: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
})