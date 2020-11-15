import profileReducer, {profileACTypes, ProfilePageType} from "./profile-reducer";
import dialogsReducer, {dialogsACTypes, DialogsPageType} from "./dialogs-reducer";
import navbarReducer, {NavBarType} from "./navbar-reducer";
import {combineReducers, createStore, Store} from "redux";
import usersReducer, {usersACTypes, UsersPageType} from "./users-reducer";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navBar: NavBarType
    usersPage: UsersPageType
}

export type ActionTypes = profileACTypes | dialogsACTypes | usersACTypes

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: navbarReducer,
    usersPage: usersReducer,
}) //above are branches of the global state

let store: Store = createStore(reducers)

export default store

declare const window: any
window.store = store
//Store - OOP