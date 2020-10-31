import profileReducer, {profileACTypes, ProfilePageType} from "./profile-reducer";
import dialogsReducer, {dialogsACTypes, DialogsPageType} from "./dialogs-reducer";
import navbarReducer, {NavBarType} from "./navbar-reducer";
import {combineReducers, createStore, Store} from "redux";
import React from "react";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navBar: NavBarType
}

export type ActionTypes = profileACTypes | dialogsACTypes

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: navbarReducer,
})

let store: Store = createStore(reducers)

export default store

declare const window: any
window.store = store
//Store - OOP