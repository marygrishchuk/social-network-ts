import store, {ActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {authAPI, securityAPI} from "../api/api";
import {getAuthUserData} from "./auth-reducer";

export type appACTypes = ReturnType<typeof setInitialized>

export type AppReducerType = {
    initialized: boolean
}

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState: AppReducerType = {
    initialized: false
}

const appReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

const setInitialized = () => ({type: SET_INITIALIZED} as const)

export const initializeApp = () => (dispatch: Dispatch) => {
    let promise = dispatch(getAuthUserData() as any)
    promise.then(() => {
        dispatch(setInitialized())
    })
}

export default appReducer