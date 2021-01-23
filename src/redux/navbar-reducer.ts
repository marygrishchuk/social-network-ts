import {ActionTypes} from "./redux-store";
import {UserType} from "./users-reducer";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";

export type navbarACTypes =
    ReturnType<typeof setFriends>
    | ReturnType<typeof removeFriend>

export type FriendDisplayType = {
    userId: string
    avatar: string
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
            let stateCopy = {...state}
            let newFriends = {userId: action.userId, avatar: action.avatar, fullName: action.fullName}
            if (stateCopy.friends.every(f => f.userId !== action.userId)) {
                stateCopy.friends.push(newFriends)
            }
            return stateCopy
        case "REMOVE_FRIEND":
            return {
                ...state,
                friends: state.friends.filter(f => f.userId !== action.userId)
            }
        default:
            return state;
    }
}

const setFriends = (userId: string, avatar: string, fullName: string) => ({
    type: "SET_FRIENDS",
    userId,
    avatar,
    fullName
} as const)
export const removeFriend = (userId: string) => ({type: "REMOVE_FRIEND", userId} as const)

export const addFriend = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(setFriends(userId, data.photos.small, data.fullName))
    })
}

export const getFriendsFromPage = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    userAPI.getUsers(currentPage, pageSize).then(data => {
        let friends = data.items.filter((i: UserType) => i.followed === true)
        if (friends.length > 0) {
            for (let i = 0; i < friends.length; i++) {
                dispatch(setFriends(friends[i].id, friends[i].photos.small, friends[i].name))
            }
        }
    })
}

export default navbarReducer