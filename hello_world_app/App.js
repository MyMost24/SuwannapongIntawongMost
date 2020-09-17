import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View ,Image , TextInput} from 'react-native';
import MyButton from './components/MyButton';

export default function App() {
  const [input , setInput]=useState('')
  const [color , setColor]=useState('red')
  return (
    <View style={styles.container}>
      <Image source={{uri : 'https://www.igeargeek.com/_nuxt/img/835647d.png' }}
        style={styles.logo}
      >

      </Image>
      <Text style={styles.title}>Fuck off !!</Text>
      <TextInput 
      style={styles.input} 
      placeholder='Enter your name'
      value={input}
      onChangeText={(text) => {setInput(text)}}
      >   
      </TextInput>
      <Text style={{fontSize:18,marginTop:20, color: color}}> {input} </Text>

      <View style={styles.buttonLayout}>
      <MyButton title='Red' color='red' onChangeColor={(color) => { setColor(color)}} />
      <MyButton title='yellow' color='yellow' onChangeColor={(color) => { setColor(color)}} />
      <MyButton title='green' color='green' onChangeColor={(color) => { setColor(color)}} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32bf84',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,

    
  },
  logo :{
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop : 25,
    
  },
  input : {
    backgroundColor: 'gray',
    height: 40,
    borderColor: 'gray',
    borderStyle : 'solid',
    borderWidth : 1,
    width: 150,
    marginTop: 20,
    padding:5,
  },
  buttonLayout :{
    flexDirection : "row",
    margin : 10,
  }

});
