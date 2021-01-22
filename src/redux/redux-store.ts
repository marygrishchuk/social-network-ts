import profileReducer, {profileACTypes, ProfilePageType} from "./profile-reducer";
import dialogsReducer, {dialogsACTypes, DialogsPageType} from "./dialogs-reducer";
import navbarReducer, {navbarACTypes, NavBarType} from "./navbar-reducer";
import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import usersReducer, {usersACTypes, UsersPageType} from "./users-reducer";
import authReducer, {authACTypes, AuthType} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {FormState, reducer as formReducer} from 'redux-form';
import appReducer, {appACTypes, AppReducerType} from "./app-reducer";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navBar: NavBarType
    usersPage: UsersPageType
    auth: AuthType
    form: FormState
    app: AppReducerType
}

export type ActionTypes = profileACTypes | dialogsACTypes | usersACTypes | authACTypes | navbarACTypes | appACTypes

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
}) //above are branches of the global state

let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

declare const window: any
window.store = store
//Store - OOP