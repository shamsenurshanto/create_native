import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';

export default function App() {
  const [text2, settext] = useState('');
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
     
      <LoginScreen></LoginScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
  
    borderWidth: 1,
    width: 300,
    borderColor: "#000000",
    height:40,
    textAlign:'center',
    fontFamily:"DancingScript-Regular",
    
    backgroundColor: '#ffffff',
    color:'lime'
   
   
    
    
  },
  textstyle :{
    fontFamily:"DancingScript-Regular",
    
    
    
  }
});
