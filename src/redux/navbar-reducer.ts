import {ActionTypes} from "./redux-store";
import {UserType} from "./users-reducer";

export type navbarACTypes =
    | ReturnType<typeof toggleIsFetching>


export type NavBarType = {
    isFetching: boolean
}

let initialState: NavBarType = {
    isFetching: false
}

const navbarReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "TOGGLE_IS_FETCHING": {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}

export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const)

export default navbarReducer