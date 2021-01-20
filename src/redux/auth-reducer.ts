import store, {ActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {authAPI, securityAPI} from "../api/api";

export type authACTypes = ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setCaptchaURL>

export type AuthType = {
    id: string
    email: string
    login: string
    isFetching: boolean
    isAuth: boolean
    captchaURL: string
}

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState: AuthType = {
    id: "",
    email: "",
    login: "",
    isFetching: false,
    isAuth: false,
    captchaURL: ""
}

const authReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                captchaURL: action.captchaURL
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}

const setAuthUserData = (id: string, email: string, login: string, isAuth: boolean) => ({
    type: SET_AUTH_USER_DATA,
    payload: {id, email, login, isAuth}
} as const)
const setCaptchaURL = (captchaURL: string) => ({type: SET_CAPTCHA_URL, captchaURL} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me().then(data => {
        dispatch(toggleIsFetching(true))
        if (data.resultCode === 0) {
            dispatch(toggleIsFetching(false))
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean, captcha?: string) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe, captcha).then(data => {
        dispatch(toggleIsFetching(true))
        if (data.resultCode === 0) {
            dispatch(toggleIsFetching(false))
            dispatch(getAuthUserData() as any)
            dispatch(setCaptchaURL(""))
        }
        if (data.resultCode === 1) {
            dispatch(toggleIsFetching(false))
            dispatch(stopSubmit("login", {_error: data.messages}))
        }
        if (data.resultCode === 10) {
            dispatch(toggleIsFetching(false))
            dispatch(stopSubmit("login", {_error: data.messages}))
            securityAPI.getCaptchaURL().then(data => {
                dispatch(setCaptchaURL(data.url))
            })
        }
    })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData("", "", "", false))
        }
    })
}

export default authReducer