import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const passenger = () => {
  return (
    <View style={styles.container}>
      <Text>passenger</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 15
    },
  });  
export default passenger