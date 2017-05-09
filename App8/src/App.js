import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {

		/*
        firebase.initializeApp({
            apiKey: "AIzaSyDzaAtP3pS2EHo0rMxSvM8RGvUNlIJ9itw",
            authDomain: "whatsapp-clone-a1774.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-a1774.firebaseio.com",
            projectId: "whatsapp-clone-a1774",
            storageBucket: "whatsapp-clone-a1774.appspot.com",
            messagingSenderId: "882014132004"
        });
		
		*/
		
		firebase.initializeApp({
            apiKey: "AIzaSyAm7KHhWoPhC1_KEZTQtzlTTsM0oSL_ap8",
            authDomain: "whatsapclone-fff45.firebaseapp.com",
            databaseURL: "https://whatsapclone-fff45.firebaseio.com",
            projectId: "whatsapclone-fff45",
            storageBucket: "whatsapclone-fff45.appspot.com",
            messagingSenderId: "636448157714"
        });
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
