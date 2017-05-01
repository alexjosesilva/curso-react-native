/**
 * App2: Gerar frases aleatorias
 * Alex Jose
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const Estilo = {
 principal:{
  flex:1,
  justifyContent: 'center',
  alignItems: 'center'
 },

 botao:{
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40, 
    marginTop: 20
 },

 textBotao: {
  color:'white',
  fontSize: 16,
  fontWeight: 'bold' 
 } 

};

const botaoPressionado = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio*5);

  //frase
  var frases = Array();
  frases[0] = "A felicida so e real quando compartilhada";
  frases[1] = "O senhor é meu pastor e nada faltara";
  frases[2] = "Amigo de todos, Amigo de ninguem";
  frases[3] = "Em terra de cego quem tem um olho é rei";
  frases[4] = "Há pessoas que caminham pela floresta e so encherga LENHA";

  var fraseEscolhida = frases[numeroAleatorio];

  alert(fraseEscolhida);
};


//criar um componente
const App2 = () =>{
  const {principal, botao, textBotao} = Estilo;
  return(
      <View style={Estilo.principal}>
          <Image source={require('./img/logo.png')} />
            
          <TouchableOpacity style={botao} onPress={botaoPressionado}>
            <Text style={textBotao}>Nova frase </Text>
          </TouchableOpacity> 


      </View>
    );
};


AppRegistry.registerComponent('App2', () => App2);
