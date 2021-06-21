import React from 'react';
import './App.css';
import {Redirect, Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom'
import {Navbar} from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {RootStateType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";

export const PATH = {
    LOGIN: "/login",
    DIALOGS: "/dialogs",
    NEWS: "/news",
    MUSIC: "/music",
    PROFILE: "/profile",
    USERS: "/users",
    SETTINGS: "/settings",
}

type PathParamsType = {}

type PropsType = RouteComponentProps<PathParamsType> & {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component<PropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path={['/', `${PATH.PROFILE}/:userId?`]} render={() => <ProfileContainer/>}/>
                        <Route path={PATH.DIALOGS} render={() => <DialogsContainer/>}/>
                        <Route path={PATH.NEWS} render={() => <News/>}/>
                        <Route path={PATH.MUSIC} render={() => <Music/>}/>
                        <Route path={PATH.USERS} render={() => <UsersContainer/>}/>
                        <Route path={PATH.SETTINGS} render={() => <Settings/>}/>
                        <Route path={PATH.LOGIN} render={() => <LoginPage/>}/>
                        <Route path={'/404'} render={() => <div>404. Page Not Found</div>}/>
                        <Redirect from={'*'} to={'/404'}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

type MapStatePropsType = {
    initialized: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)
