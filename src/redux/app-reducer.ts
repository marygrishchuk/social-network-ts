import {ActionTypes, RootStateType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";

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

export const initializeApp = () => (dispatch: ThunkDispatch<RootStateType, void, appACTypes>) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(setInitialized())
    })
}

export default appReducer