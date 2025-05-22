import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Travels = () => {
    return (
        <View>

          <View style = {styles.travelscard}>

            <View>
              <Text>De: Cedro</Text>
              <Text>Para: Fortaleza</Text>
              <Text>Data: 20/09/2025</Text>
              <Text>Horário: 08:00h</Text>
            </View>

            <View>
              <Text>Vagas</Text>
              <Text>3/4</Text>
            </View>

          </View>

        </View>
    )
}
const styles = StyleSheet.create({
  travelscard: {
    backgroundColor: '#9e9e9e',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    marginHorizontal: 20
  },
  blankcard: {
    backgroundColor: '#FFF',
    height: 70,
    width: 70,
    borderRadius: 7,
    marginLeft: 165,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
})

export default Travels