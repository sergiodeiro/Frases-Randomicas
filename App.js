/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
//Destructuring assignment {}
import {Platform,Text,View,Image,TouchableOpacity,Alert} from 'react-native';
import  _styles from './style.js';


const botaoPress = () =>{
  let numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5); // Numero random de forma que ele só vá até o número 5
  
  let frases = ['Primeira Frase','Segunda Frase','Terceira Frase','Quarta Frase','Quinta Frase']

  let fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida)
}

export default class App extends Component{ 
 
  render() {
    
    //SERVE PARA ESTILO PROPRIOS (OU SEJA SÓ PARA DETERMINADA PAGINA)
    //const {estiloTexto,estiloTexto3,estiloTexto2} = estiloUnico;
    // Para usar o <Text></Text>
    return (
      <View style={_styles.principal}>
        <Image source={require('./imgs/logo.png')}/>
        <TouchableOpacity onPress={botaoPress} style={_styles.button}>
          <Text style={_styles.buttonFrase}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    );  
  }
}


// Arrow Functions = () => {}
//Destructing Assign = {Texto,Name,Forden}

/*const estiloUnico = {
   ETAPA 1 DE FLEXS
  estiloTexto: {
    fontSize: 40,
    backgroundColor:'#08509B',
    textAlign:'center',
   },
   estiloTexto2: {
    fontSize: 40,
    backgroundColor:'#08509B',
    textAlign:'center',
   },
   estiloTexto3: {
    fontSize: 40,
    backgroundColor:'#08509B',
    textAlign:'center',
   }
}*/