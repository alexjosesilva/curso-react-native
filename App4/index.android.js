/**
 * #App4: Lista itens de produtos de uma loja
 * Alex Jose 
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import ListaItens from './src/components/ListaItens';

class app4 extends Component {
  render() {
    return (
      <ListaItens />
    );
  }
}

AppRegistry.registerComponent('app4', () => app4);
