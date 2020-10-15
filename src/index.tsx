import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/store';

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()     //нужно, чтобы происходила исходная отрисовка

store.subscribe(rerenderEntireTree)  //нужно, чтобы происходили перерисовки после изменений (в state)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
