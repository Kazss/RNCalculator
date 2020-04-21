import React, { useState } from 'react';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function App() {  
  
  const [total, setTotal] = useState('');
  const [total2, setTotal2] = useState('0');
  var aux1 = ['+', '-', '*', '/'];
  var aux2 = ['', ...aux1];
  var aux3 = ['.', ...aux2];
  
  // Add number or char -> -> its working, but need tests and need put a limit of chars
  function handleAddChar(char){
    if(aux1.includes(char) === true && aux1.includes(total.slice(-1)) === true){
      return
    }
    else if(char === '.' && aux2.includes(total.slice(-1)) === true){
      setTotal(total + '0' + char);
      setTotal2('= ' + total + '0' + char);
    }
    else if(aux1.includes(char) === true && total2 === '0'){
      return
    }
    else if(total2 === '0'){
      setTotal(total + char);
      setTotal2('= ' + char);
    }      
    else if (aux1.includes(char) === true) {       
      setTotal(total + char);
    }
    else {
      setTotal(total + char);
      setTotal2('= ' + eval(total + char));
    }     
  };    

  // Delete the last char -> its working, but need tests
  function handleClearLastChar()
  {
    if(total.slice(-1) === ''){
      setTotal('');
      setTotal2('0');
      return
    }
    if(Number(total) < 10){
      setTotal('');
      setTotal2('0');
      return
    }
    if(aux3.includes(total.charAt(total.length - 2)) === true){
      setTotal(total.slice(0, -1));
      setTotal2('= ' + eval(total.slice(0, -2)));
    }
    else{
      setTotal(total.slice(0, -1));
      setTotal2('= ' + eval(total.slice(0, -1)));
    }
  }

  // Divide the number per 100 -> have bugs to fix
  function handlePercent(){
      setTotal(eval(total / 100));
      setTotal2('= ' + eval(total / 100));
      // After the first div, will bug.
  }
  
  // Delete everything -> its working, but need tests
  function handleClearTotal(){
    setTotal('');
    setTotal2('0');
  };
  
  // Need changes, something like -> total2 with big size and delete total.
  function handleEqual(){
    setTotal('')
    setTotal2(total2);
  }

  return (
      <View style={styles.container}>
          {/* Results */}
        <View style={styles.calculation}>
          <Text style={styles.detailsTextResult}>{total}</Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.detailsTextResult}>{total2}</Text>
        </View>

        <View style={styles.line}></View>
        
        {/* Buttons */}

        <View style={styles.buttonsCandDiv}>
          <TouchableOpacity style={styles.detailsButtonGray} onPress={() => handleClearTotal()}>
          <Text style={styles.TextG}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsButtonGray} onPress={() => handleClearLastChar()}>
          <MaterialCommunity name="backspace-outline" size={40} color="#b2adad" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsButtonGray} onPress={() => handlePercent()}>
          <MaterialCommunity name="percent" size={40} color="#b2adad" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsButtonGray} onPress={() => handleAddChar('/')}>
          <MaterialCommunity name="division" size={50} color="#b2adad" />
          </TouchableOpacity>
        </ View>
        
        <View style={styles.buttons789mult}>
          <TouchableOpacity style={styles.detailsButtonDefault} onPress={() => handleAddChar(7)}>
          <Text style={styles.Text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsButtonDefault} onPress={() => handleAddChar(8)}>
          <Text style={styles.Text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsButtonDefault} onPress={() => handleAddChar(9)}>
          <Text style={styles.Text}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsButtonGray} onPress={() => handleAddChar("*")}>
          <MaterialCommunity name="close" size={40} color="#b2adad" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttons456less}>
          <TouchableOpacity style={styles.detailsButtonDefault} onPress={() => handleAddChar(4)}>
          <Text style={styles.Text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsButtonDefault} onPress={() => handleAddChar(5)}>
          <Text style={styles.Text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsButtonDefault} onPress={() => handleAddChar(6)}>
          <Text style={styles.Text}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsButtonGray} onPress={() => handleAddChar('-')}>
          <MaterialCommunity name="minus" size={40} color="#b2adad" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttons123sum}>
          <TouchableOpacity style={styles.detailsButtonDefault} onPress={() => handleAddChar(1)}>
            <Text style={styles.Text}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsButtonDefault} onPress={() => handleAddChar(2)}>
            <Text style={styles.Text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsButtonDefault} onPress={() => handleAddChar(3)}>
            <Text style={styles.Text}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsButtonGray} onPress={() => handleAddChar('+')}>
          <MaterialCommunity name="plus" size={40} color="#b2adad" />
          </TouchableOpacity>
        </View>

        <View style={styles.buttons0equal}>
        <TouchableOpacity style={styles.detailsButtonGray} onPress={() => handleAddChar()}>
          <Text style={styles.TextG}>CT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsButtonDefault} onPress={() => handleAddChar(0)}>
          <Text style={styles.Text}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailsButtonDefault} onPress={() => handleAddChar('.')}>
          <Text style={styles.Text}>.</Text>
          </TouchableOpacity>  
          <TouchableOpacity style={styles.detailsButtonEqual} onPress={() => handleEqual()}>
          <MaterialCommunity name="equal" size={40} color="#FFFFFF" />
          </TouchableOpacity>                   
        </View> 
      </View>
  );
};