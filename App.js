
import axios from 'axios';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Alert } from 'react-native';


const Stack = createStackNavigator();
const showAlert = () => {
  Alert.alert(
    'User Email or Password Invalid',
    'Please provide valid information',
    [
      { text: 'OK', onPress: () => console.log('OK Pressed') }
    ],
    { cancelable: false }
  );
};
function ScreenA({ navigation }) {

  
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
        console.log(response.data.success);
        if(response.data.success)
        {
          navigation.navigate('Screen_B');
        }
        else
        {
          
        }
  
        
         
        
  
      } catch (error) {
        console.error(error);
       showAlert();
      }
       
  
    
  }

  return (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Hello world</Text>
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
}



function ScreenB({ navigation }) {

  const onPressHandler = () => {
    // navigation.navigate('Screen_A');
    navigation.navigate('Screen_C');
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen B
      </Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
      >
        <Text style={styles.text}>
          Go Back to Screen A
        </Text>
      </Pressable>
    </View>
  )
}


function ScreenC({ navigation }) {

  const onPressHandler = () => {
    // navigation.navigate('Screen_A');
    navigation.goBack();
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen C
      </Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
      >
        <Text style={styles.text}>
          Go Back to Screen B
        </Text>
      </Pressable>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   header: () => null
        // }}
      >
        <Stack.Screen
          name="Screen_A"
          component={ScreenA}
        // options={{
        //   header: () => null
        // }}
        />
        <Stack.Screen
          name="Screen_B"
          component={ScreenB}
        />

        <Stack.Screen
          name="Screen_C"
          component={ScreenC}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
    margin: 10,
    fontFamily:'Ubuntu-Light',
    color: '#00000070'
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
})

export default App;