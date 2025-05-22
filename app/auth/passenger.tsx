import { View, Text, StyleSheet, TextInput, ScrollView, Alert, Pressable} from 'react-native'
import React, {useState} from 'react'
import {MaterialIcons} from '@expo/vector-icons'
import {Link} from 'expo-router'
import { useRouter } from 'expo-router'

const Driver = () => {

  const router = useRouter()
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [tel, setTel] = useState("");
    const handleSaveUserPassenger = async () => {
      console.log(name);
      console.log(email);
      console.log(tel);
      console.log(password);
  
      const response = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
  
        body: JSON.stringify({
          name,
          email,
          type: "passenger",
          telephone: tel,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        Alert.alert("Cadastro realizado com sucesso!");
        router.push("/(tabs)/home");
      } else {
        Alert.alert("Erro ao cadastrar passageiro:", data);
      }
    };
  return (
    <>
        <View style = {styles.blackboard}>
          <Link href = "/" >
            <MaterialIcons  name = 'arrow-back' style = {styles.arrow}/>
          </Link>
          <Text style = {styles.header}>Cadastro de Novo Passageiro</Text>
        </View>

        <ScrollView>

        <View>
            <Text style = {styles.text}>Vamos realizar o seu cadastro, só precisamos de algumas informações:</Text>
        </View>

        <View style = {styles.form}>
            <Text style = {styles.formheader}>Informações Pessoais</Text>

            <Text style={{ fontSize: 18 }}>Nome Completo</Text>
            <TextInput onChangeText={(txt) => setName(txt)} value={name} style={styles.forminput} />
          
            <Text style={{ fontSize: 18 }}>Email</Text>
            <TextInput onChangeText={(txt) => setEmail(txt)} value={email} style={styles.forminput} />
          
            <Text style={{ fontSize: 18 }}>Telefone/Whatsapp</Text>
            <TextInput onChangeText={(txt) => setTel(txt)} value={tel} style={styles.forminput} />
          
            <Text style={{ fontSize: 18 }}>Senha</Text>
            <TextInput onChangeText={(txt) => setPassword(txt)} value={password} style={styles.forminput} />
        </View>

        </ScrollView>

        <View style = {styles.button}>
          <Pressable onPress={() => router.push('/(tabs)/home')}>
            <Text style={{ color: '#FFF', fontSize: 22 }}>Cadastrar</Text>
          </Pressable>
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

    button: {
      backgroundColor: '#000',
      width: '90%',
      padding: 10,
      borderRadius: 8,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 20,
    },

    form: {
      paddingHorizontal: 25,
      paddingVertical: 18,
    },

    formfields:{
      fontSize: 18
    },

    formheader: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 16,
    },

    forminput: {
      backgroundColor: '#fdfdfd',
      borderWidth: 1,
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
      marginLeft: 10
    },

    text: {
      paddingHorizontal: 25,
      fontSize: 24,
      paddingVertical: 18,
    },
  });  
export default Driver