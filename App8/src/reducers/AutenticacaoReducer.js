const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: ''
}

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    if(action.type == 'modifica_email'){
        return { ...state, email: action.payload }
    }
    if(action.type == 'modifica_senha') {
        return { ...state, senha: action.payload }
    }
    if(action.type == 'modifica_nome') {
        return { ...state, nome: action.payload }
    }
    if(action.type == 'cadastro_usuario_erro') {
        return { ...state, erroCadastro: action.payload}
    }
    if(action.type == 'cadastro_usuario_sucesso') {
        return { ...state, nome: '', senha: ''}
    }
    if(action.type == 'login_usuario_erro') {
        return { ...state, erroLogin: action.payload}
    }
    return state;
}