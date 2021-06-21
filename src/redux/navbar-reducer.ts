import {ActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {userAPI} from "../api/api";

export type navbarACTypes = ReturnType<typeof setFriends>


export type FriendDisplayType = {
    userId: string
    avatar: string | null
    fullName: string
}

export type NavBarType = {
    friends: Array<FriendDisplayType>
}

let initialState: NavBarType = {
    friends: [],
}

const navbarReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET_FRIENDS":
            return {...state, friends: action.newFriends}
        default:
            return state;
    }
}

const setFriends = (newFriends: Array<FriendDisplayType>) => ({
    type: "SET_FRIENDS", newFriends
} as const)

export const getFriends = (currentPage: number, pageSize: number, friend: boolean) => (dispatch: Dispatch) => {
    userAPI.getUsers(currentPage, pageSize, friend).then(data => {
        dispatch(setFriends(data.items.map(f => ({
            userId: f.id,
            avatar: f.photos.small,
            fullName: f.name
        }))))
    })
}

export default navbarReducer