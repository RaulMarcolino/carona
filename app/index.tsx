import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
      <Text style = {styles.h1} >Como você deseja usar o app?</Text>

      <Image style = {styles.images} source = { require('../assets/driver.png') }/>
      <Text  style = {styles.h1} >Motorista</Text>
      <Text style = {styles.text} >Ofereça carona e ganhe dinheiro</Text>

      <Image style = {styles.images} source = { require('../assets/passenger.png') }/>
      <Text style = {styles.h1} >Passageiro</Text>
      <Text style = {styles.text} >Encontre caronas e economize</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 25,
    position: "relative",
    textAlign: "center"
  },

  images: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 20
  },

  text: {
    fontSize: 20,
    position: "relative",
    textAlign: "center"
  }
})

export default index