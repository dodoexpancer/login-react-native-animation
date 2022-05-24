import React, { useState } from 'react';
import {View, Text,  StyleSheet, TextInput, TouchableOpacity, Alert, Modal, Pressable} from 'react-native'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'


export default function SingIn(){
        const [modal, openCloseModal] = useState(false);
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');
        const navigation = useNavigation();
        
        const usuario = {
            senha: '12345',
            email: 'Evaristotrol@hotmail.com'
        }
             const openClose = () => {
                 if(email === '' || (senha === '')){
                    openCloseModal(true)
                 } else {
                    if(usuario.email !== email || (usuario.senha !== senha)){
                        openCloseModal(true)
                    } else {
                        openCloseModal(false)
                        navigation.navigate('ListFlat')
                    }
                
                 }
     
        }

    return(
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem Vindo(a)</Text>
            </Animatable.View>
            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput 
                      value={email}
                      placeholder='Ensira um Email...'
                      style={styles.input}
                      onChangeText={setEmail}
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput 
                      value={senha}
                      onChangeText={setSenha}
                      placeholder='sua Senha...'
                      style={styles.input}
                />
                <TouchableOpacity
                      style={styles.buttonAcesso}
                      onPress={openClose}
                >
                <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                       onPress={() =>  navigation.navigate('Register')}
                       style={styles.buttonRegister}>
                <Text style={styles.registerText}>Nâo possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
                <Modal
                       animationType="slide"
                       transparent={true}
                       visible={modal}
                       onRequestClose={() => {
                       Alert.alert("Modal has been closed.");
                       openCloseModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Insira Email e Senha Validos</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => openCloseModal(!modal)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
container:{
flex: 1,
backgroundColor: 'black',
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
title: {
    fontSize: 20,
    marginTop: 20,
},
input:{
    borderBottomWidth: 1,
    height:40,
    marginBottom: 12,
    fontSize: 16,
}, 
buttonAcesso:{
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
buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
},
registerText: {
    color: '#a1a1a1'
},
centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "red",
  },
  buttonClose: {
    backgroundColor: "black",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: 'red'
  }


})