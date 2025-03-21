import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const index = () => {
  return (
    <View>
      <Text style = {styles.title} >Como você deseja usar o app?</Text>

      <Link href = "/auth/driver" style = {styles.link}>
         <Image style = {styles.images} source = { require('../assets/driver.png') }/>
      </Link>
      <Text  style = {styles.h1} >Motorista</Text>
      <Text style = {styles.text} >Ofereça carona e ganhe dinheiro.</Text>

      <Link href = "/auth/passenger" style = {styles.link}>
      <Image style = {styles.images} source = { require('../assets/passenger.png') }/>
      </Link>
      <Text style = {styles.h1} >Passageiro</Text>
      <Text style = {styles.text} >Encontre caronas e economize.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    position: "relative",
    textAlign: "center",
    paddingHorizontal: 20,
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    marginTop: 15
  },

  h1: {
    fontSize: 30,
    position: "relative",
    textAlign: "center",
    paddingHorizontal: 20
  },

  link: {
    alignSelf: "center",
    position: "relative"
  },

  images: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 100,
    marginBottom: 20,
    paddingHorizontal: 20
  },

  text: {
    fontSize: 20,
    position: "relative",
    textAlign: "center",
    paddingHorizontal: 20
  }
})

export default index