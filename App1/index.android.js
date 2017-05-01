/**
 * Sessão 6
 * Gerar numero aleatorios
 * Alex Jose
 */

import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();

  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio);
}


const App = () => {

  return (
    <View>
      <Text>Gerador numero</Text>
      <Button 
        title="Gerar numero"
        onPress={geraNumeroAleatorio}
      />
    </View>
  );
};

AppRegistry.registerComponent('App1', () => App);;
