import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';

export default props => (
    <Router>
        <Scene key='formLogin' component={FormLogin} title="Login" />
        <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
        <Scene key='boasVindas' component={BoasVindas} title="Bem-Vindo" />
    </Router>
);
