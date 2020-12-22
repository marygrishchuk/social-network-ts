import {ActionTypes} from "./redux-store";
import {setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, UserType} from "./users-reducer";
import {Dispatch} from "redux";
import {userAPI} from "../api/api";

export type navbarACTypes = ReturnType<typeof setFriendsSuccess>

export type NavBarType = {
    friends: Array<UserType>
}

let initialState: NavBarType = {
    friends: []
}

const navbarReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "SET_FRIENDS":
            return {
                ...state,
                friends: action.friends
            }
        default:
            return state;

    }
}

const setFriendsSuccess = (friends: UserType) => ({type: "SET_FRIENDS", friends} as const)

export const setFriends = () => (dispatch: Dispatch) => {
    userAPI.getFriends().then(data => {
        let friends = data.items.filter((i: UserType) => i.followed === true)
        dispatch(setFriendsSuccess(friends))
    })
}

export default navbarReducer