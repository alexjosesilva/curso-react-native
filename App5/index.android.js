import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

export default class app5 extends Component {
  render() {
    return (
      <Navigator
				initialRoute={{ id: 'principal' }}
				renderScene={(route, navigator) => {
					switch (route.id) {
						case 'principal':
							return (<CenaPrincipal navigator={navigator} />);

						case 'cliente':
							return (<CenaClientes navigator={navigator} />);

						case 'contato':
							return (<CenaContatos navigator={navigator} />);

						case 'empresa': 
							return (<CenaEmpresa navigator={navigator} />);

						case 'servico':
							return (<CenaServicos navigator={navigator} />);

						default:
							return false;
					}
				}}
      />
    );
  }
}

AppRegistry.registerComponent('app5', () => app5);
