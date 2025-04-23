import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
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

        <ScrollView>

        <View style = {styles.form}>
            <Text style = {styles.text}>Vamos realizar o seu cadastro, só precisamos de algumas informações:</Text>
        </View>

        <View style = {styles.form}>
          <Text style = {styles.formheader}>Informações Pessoais</Text>

          <Text style = {styles.formfields}>Nome Completo</Text>
          <TextInput style = {styles.forminput} />

          <Text style = {styles.formfields}>Email</Text>
          <TextInput style = {styles.forminput} />

          <Text style = {styles.formfields}>Telefone/Whatsapp</Text>
          <TextInput style = {styles.forminput} />

          <Text style = {styles.formfields}>Senha</Text>
          <TextInput style = {styles.forminput} />
        </View>

        <View style = {styles.form}>
          <Text style = {styles.formheader}>Informações do Veículo</Text>

          <Text style = {styles.formfields}>Marca</Text>
          <TextInput style = {styles.forminput} />

          <Text style = {styles.formfields}>Modelo</Text>
          <TextInput style = {styles.forminput} />
          
          <Text style = {styles.formfields}>Ano</Text>
          <TextInput style = {styles.forminput} />
          
          <Text style = {styles.formfields}>Placa</Text>
          <TextInput style = {styles.forminput} />
        </View>

        </ScrollView>

        <View>
          <Text style={{ color: '#FFF', fontSize: 22 }}>Cadastrar</Text>
        </View>
    </>
  )
}

const styles = StyleSheet.create({
    arrow: {
      marginLeft: 15,
      color: '#FFF',
      fontSize: 35,
      alignSelf: 'center'
    },

    blackboard: {
      backgroundColor: '#000',
      height: 80,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row'
    },

    form: {
      backgroundColor: '#252525',
      paddingHorizontal: 25,
      paddingVertical: 18
    },

    formfields:{
      fontSize: 18,
      color: '#FFF',
      marginBottom: 8
    },

    formheader: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#FFF'
    },

    forminput: {
      backgroundColor: '#202020',
      borderWidth: 1.5,
      borderColor: '#c0c0c0',
      borderRadius: 8,
      height: 42,
      marginBottom: 16,
      padding: 8
    },

    header: {
      color: '#FFF',
      fontSize: 22, 
      textAlign: 'center',
      fontWeight: 'bold', 
      marginLeft: 25
    },

    text: {
      paddingHorizontal: 25,
      fontSize: 24,
      paddingVertical: 18,
      color: '#FFF'
    },
  });  
export default driver