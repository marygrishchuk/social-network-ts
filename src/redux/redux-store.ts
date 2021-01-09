import profileReducer, {profileACTypes, ProfilePageType} from "./profile-reducer";
import dialogsReducer, {dialogsACTypes, DialogsPageType} from "./dialogs-reducer";
import navbarReducer, {navbarACTypes, NavBarType} from "./navbar-reducer";
import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import usersReducer, {usersACTypes, UsersPageType} from "./users-reducer";
import authReducer, {authACTypes, AuthType} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {FormState, reducer as formReducer} from 'redux-form';

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navBar: NavBarType
    usersPage: UsersPageType
    auth: AuthType
    form: FormState
}

export type ActionTypes = profileACTypes | dialogsACTypes | usersACTypes | authACTypes | navbarACTypes

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
}) //above are branches of the global state

let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

declare const window: any
window.store = store
//Store - OOP