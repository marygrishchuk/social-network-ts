import {ActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type authACTypes = ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setLoggedIn>
    | ReturnType<typeof setLoggedOut>

export type AuthType = {
    id: string
    email: string
    login: string
    isFetching: boolean
    isAuth: boolean
}

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const SET_LOGGED_IN = "SET_LOGGED_IN";
const SET_LOGGED_OUT = "SET_LOGGED_OUT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState: AuthType = {
    id: "",
    email: "",
    login: "",
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_LOGGED_IN: {
            return {
                ...state,
                isAuth: true
            }
        }
        case SET_LOGGED_OUT: {
            return {
                ...state,
                isAuth: false
            }
        }
        default:
            return state;
    }
}

const setAuthUserData = (id: string, email: string, login: string) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}} as const)
const setLoggedIn = () => ({type: SET_LOGGED_IN} as const)
const setLoggedOut = () => ({type: SET_LOGGED_OUT} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
            dispatch(toggleIsFetching(false))
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}

export const submitLoginData = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(setLoggedIn())
        }
    })
}

export const submitLogOut = () => (dispatch: Dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setLoggedOut())
        }
    })
}

export default authReducer