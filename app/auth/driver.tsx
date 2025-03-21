import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {MaterialIcons} from '@expo/vector-icons'

const driver = () => {
  return (
    <>
        <View style = {{backgroundColor: '#000', 
        height: 80,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'}}>
          <MaterialIcons  name = 'arrow-back' style = {styles.arrow}/>
          <Text style = {{color: '#FFF',
            fontSize: 22, 
            textAlign: 'center',
            fontWeight: 'bold', 
            marginLeft: 25}}>Cadastro de Novo Motorista</Text>
        </View>
        <View style = {styles.container}>
            <Text>Vamos realizar o se cadastro, só precisamos de algumas informações:</Text>
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
        
    }
  });  
export default driver