import axios from 'axios';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log(`Username: ${username}, Password: ${password}`);
  };
  const obj = {
    userEmailPhone:username,
       userPass:password
  }
  const [data, setData] = useState({});

  
  let [employeeName, setEmployeeName] = useState("");
//  it is function
  let createEmployee = async (username,password) => {
    console.log(obj)
    try {
      setData(obj)
      const response = await axios.post('https://smoggy-toad-fedora.cyclic.app/api/auth/login', data);
      console.log(response.data);

      
        navigation.navigate('Screen_B');
      

    } catch (error) {
      console.error(error);
    }
     

  };
  return (

    
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={createEmployee}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width:300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    
  },
  button: {
    height: 50,
    width: '80%',
    backgroundColor: '#2196F3',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    width:100,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign:'center'
  },
});

export default LoginScreen;
