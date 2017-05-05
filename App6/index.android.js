import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Rotas from './src/Rotas';

export default class App6 extends Component {
  render() {
    return (
      <Rotas />
    );
  }
}

AppRegistry.registerComponent('App6', () => App6);
