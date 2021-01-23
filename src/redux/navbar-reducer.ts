import {ActionTypes} from "./redux-store";
import {UserType} from "./users-reducer";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";

export type navbarACTypes =
    ReturnType<typeof setFriends>
    | ReturnType<typeof removeFriend>
    | ReturnType<typeof toggleIsFetchingFriends>

export type FriendDisplayType = {
    userId: string
    avatar: string
    fullName: string
}

export type NavBarType = {
    friends: Array<FriendDisplayType>
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

const setFriends = (userId: string, avatar: string, fullName: string) => ({
    type: "SET_FRIENDS",
    userId,
    avatar,
    fullName
} as const)
export const removeFriend = (userId: string) => ({type: "REMOVE_FRIEND", userId} as const)
export const toggleIsFetchingFriends = (isFetchingFriends: boolean) => ({
    type: "TOGGLE_IS_FETCHING_FRIENDS",
    isFetchingFriends
} as const)

export const addFriend = (userId: string) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingFriends(true))
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(toggleIsFetchingFriends(false))
        dispatch(setFriends(userId, data.photos.small, data.fullName))
    })
}

export const getFriendsFromPage = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetchingFriends(true))
    userAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetchingFriends(false))
        let friends = data.items.filter((i: UserType) => i.followed === true)
        for (let i = 0; i < friends.length; i++) {
            dispatch(setFriends(friends[i].id, friends[i].photos.small, friends[i].name))
        }
    })
}

export default navbarReducer