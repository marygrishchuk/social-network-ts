import {ActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type authACTypes = ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleIsFetching>

export type AuthType = {
    id: string
    email: string
    login: string
    isFetching: boolean
    isAuth: boolean
}

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState: AuthType = {
    id: "",
    email: "",
    login: "",
    isFetching: false,
    isAuth: false
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

        default:
            return state;
    }
}

const setAuthUserData = (id: string, email: string, login: string) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}} as const)
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

export default authReducer