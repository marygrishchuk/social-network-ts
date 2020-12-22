import {ActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI, profileAPI} from "../api/api";
import {setUserProfileSuccess} from "./profile-reducer";

export type authACTypes = ReturnType<typeof setAuthUserDataSuccess>
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

export const setAuthUserDataSuccess = (id: string, email: string, login: string) => ({type: SET_AUTH_USER_DATA, data: {id, email, login}} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

export const setAuthUserData = () => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    authAPI.getAuth().then(data => {
        if (data.resultCode === 0) {
            dispatch(toggleIsFetching(false))
            let {id, email, login} = data.data
            dispatch(setAuthUserDataSuccess(id, email, login))
        }
    })
}

export default authReducer