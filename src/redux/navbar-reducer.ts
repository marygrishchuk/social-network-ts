import {ActionTypes} from "./redux-store";
import {UserType} from "./users-reducer";
import {Dispatch} from "redux";
import {userAPI} from "../api/api";

export type navbarACTypes =
    ReturnType<typeof setFriendsSuccess>
    | ReturnType<typeof removeFriend>
    | ReturnType<typeof toggleIsFetchingFriends>

export type NavBarType = {
    friends: Array<UserType>
    isFetchingFriends: boolean
}

let initialState: NavBarType = {
    friends: [],
    isFetchingFriends: false
}

const navbarReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET_FRIENDS":
            let stateCopy = {...state}
            if (stateCopy.friends !== undefined && stateCopy.friends.length > 0) {
                for (let i = 0; i < action.friends.length; i++) {
                    if (stateCopy.friends.every(f => f.id !== action.friends[i].id)) {
                        stateCopy.friends.push(action.friends[i])
                        return stateCopy
                    }
                }
            }
            return {
                ...state,
                friends: action.friends
            }
        case "REMOVE_FRIEND":
            return {
                ...state,
                friends: state.friends.filter(f => f.id !== action.userId)
            }
        case "TOGGLE_IS_FETCHING_FRIENDS": {
            return {
                ...state,
                isFetchingFriends: action.isFetchingFriends
            }
        }
        default:
            return state;

    }
}

const setFriendsSuccess = (friends: Array<UserType>) => ({type: "SET_FRIENDS", friends} as const)
export const removeFriend = (userId: string) => ({type: "REMOVE_FRIEND", userId} as const)
export const toggleIsFetchingFriends = (isFetchingFriends: boolean) => ({
    type: "TOGGLE_IS_FETCHING_FRIENDS",
    isFetchingFriends
} as const)

export const setFriends = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingFriends(true))
    userAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetchingFriends(false))
        let friends = data.items.filter((i: UserType) => i.followed === true)
        dispatch(setFriendsSuccess(friends))
    })
}

export default navbarReducer