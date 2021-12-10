import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

export default function App() {

  const [height,setHeight] = useState("");
  const [weight,setWeight] = useState("");
  const [message,setMessage] = useState("");
  const [bgColor,useBgColor] = useState('');
  const calculateBMI = () => {
    let bmi = (weight / Math.pow((height/100),2)).toFixed(0);
    let message = ""
    let bgColor = [""]
    if (bmi < 18){
      message = "underweight"
      bgColor = 'yellow'
    } else if (bmi < 25) {
      message = "normal"
      bgColor = 'lightgreen'
    } else if (bmi < 35) {
      message = "overweight"
      bgColor= 'orange'
    } else if (bmi >= 35) {
      message = "obese"
      bgColor = '#FF0000'
    } else {
      setMessage('')
      bgColor= 'lightgrey'
    }
    if (height == 0 || weight == 0 ){
      setMessage('Please enter your height and weight\n to calculate your BMI');
      useBgColor(bgColor)
    } else {
      setMessage('Your BMI is '+bmi+" and \n you are "+message+'!');
      useBgColor(bgColor)
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.fontStyle}>BMI Calculator</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://icon-library.com/images/heart-icon-svg/heart-icon-svg-11.jpg',
        }}
      />
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={text=>setHeight(text)}
        value={height}
        placeholder="Insert Height (cm)"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={text=>setWeight(text)}
        value={weight}
        placeholder="Insert Weight (kg)"
        keyboardType="numeric"
      />
      <Text style={styles.fontStyle1}>{message}</Text>
      <TouchableOpacity
      style={styles.button} onPress={calculateBMI}
      >
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fontStyle: {
    fontSize: 36,
    color: 'black',
    marginBottom:10,
    textAlign: 'center'
  },
  fontStyle1: {
    fontSize: 23,
    color: 'black',
    marginBottom:10,
    textAlign: 'center'
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom:10,
    backgroundColor:'white',
    borderRadius: 50
  },
  input: {
    height: 40,
    width: 200,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    textAlign: 'center'
  },
  buttonText: {
    color: 'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'black',
    width: 200,
    padding: 10,
    borderRadius:5
  }
});
