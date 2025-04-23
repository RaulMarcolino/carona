import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, {useState} from 'react'
import {MaterialIcons} from '@expo/vector-icons'
import {Link} from 'expo-router'

const driver = () => {
  return (
    <>
        <View style = {styles.blackboard}>
          <Link href = "/" >
            <MaterialIcons  name = 'arrow-back' style = {styles.arrow}/>
          </Link>
          <Text style = {styles.header}>Cadastro de Novo Motorista</Text>
        </View>
        <View style = {styles.container}>
            <Text style = {styles.text}>Vamos realizar o seu cadastro, só precisamos de algumas informações:</Text>
        </View>
        <View style = {styles.container}>
          <Text style = {styles.text}>Informações Pessoais</Text>
          <Text style = {styles.formfields}>Nome Completo</Text>
          <TextInput />
          <Text style = {styles.formfields}>Email</Text>
          <TextInput />
          <Text style = {styles.formfields}>Telefone/Whatsapp</Text>
          <TextInput />
          <Text style = {styles.formfields}>Senha</Text>
          <TextInput />
        </View>
        <View style = {styles.container}>
          <Text style = {styles.text}>Informações do Veículo</Text>
          <Text style = {styles.formfields}>Marca</Text>
          <TextInput />
          <Text style = {styles.formfields}>Modelo</Text>
          <TextInput />
          <Text style = {styles.formfields}>Ano</Text>
          <TextInput />
          <Text style = {styles.formfields}>Placa</Text>
          <TextInput />
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 15
    },
    arrow: {
      marginLeft: 15,
      color: '#FFF',
      fontSize: 35,
      alignSelf: 'center'
    },
    text: {
      marginHorizontal: 15,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'left'
    },
    blackboard: {
      backgroundColor: '#000',
      height: 80,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row'
    },
    header: {
      color: '#FFF',
      fontSize: 22, 
      textAlign: 'center',
      fontWeight: 'bold', 
      marginLeft: 25
    },
    formfields:{
      textAlign: 'left',
      fontSize: 18,
      marginTop: 10,
      marginBottom: 5
    }
  });  
export default driver