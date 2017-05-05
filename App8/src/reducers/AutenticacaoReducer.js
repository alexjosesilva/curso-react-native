const INITIAL_STATE = {
    nome: 'Jorge',
    email: 'jorge@teste.com.br',
    senha: '12345'
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    if(action.type == 'modifica_email'){
        return { ...state, email: action.payload }
    }
    if(action.type == 'modifica_senha') {
        return { ...state, senha: action.payload }
    }
    return state;
}