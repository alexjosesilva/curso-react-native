import React, { Component } from 'react';
import { View, Image } from 'react-native';

const imagem = require('../../imgs/jogo.png');

class Topo extends Component {
  render() {
    return (
      <View>
        <Image source={imagem} />
      </View>
    );
  }
}

export default Topo;
