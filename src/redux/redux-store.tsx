import profileReducer, {profileACTypes, ProfilePageType} from "./profile-reducer";
import dialogsReducer, {dialogsACTypes, DialogsPageType} from "./dialogs-reducer";
import navbarReducer, {NavBarType} from "./navbar-reducer";
import {combineReducers, createStore} from "redux";
import App from "../App";
import StoreContext from "../StoreContext";
import React, {PropsWithChildren, ReactNode, ReactNodeArray, ReactPortal} from "react";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

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

let store: StoreType = createStore(reducers)

export default store

declare const window: any
window.store = store
//Store - OOP