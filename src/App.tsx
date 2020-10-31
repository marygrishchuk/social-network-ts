import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import {RootStateType} from './redux/redux-store';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {Friends} from './components/Friends/Friends';
import {StoreType} from "./redux/redux-store";

export type PropsType = {
    store: StoreType
    state: RootStateType
}

const App = (props: PropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.navBar}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                <Route path="/dialogs" render={() => <Dialogs store={props.store}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/friends" render={() => <Friends/>}/>
            </div>
        </div>
    );
}

export default App;
