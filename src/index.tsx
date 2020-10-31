import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import store, {RootStateType} from './redux/redux-store';

let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <HashRouter>
            <App state={state} store={store}/>
        </HashRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())     //нужно, чтобы происходила исходная отрисовка

store.subscribe(() => {
        let state = store.getState()
        rerenderEntireTree(state)
    }
)  //нужно, чтобы происходили перерисовки после изменений (в state)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
