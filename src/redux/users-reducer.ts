import {ActionTypes} from "./redux-store";

export type usersACTypes = ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

export type UserType = {
    name: string
    id: string
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    }
    status: string | null
    followed: boolean
}
export type UsersPageType = {
    users: Array<UserType>
}

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState: UsersPageType = {
    users: []
}

const usersReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: [...state.users]
                //  Analogue:
                //users: state.users.map(u => u)
                //We need to copy only the item that needs to be changed!
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    } //we've changed only 1 object in the array!
                    return u  //the rest will be the same.
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u: any) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } //we've changed only 1 object in the array!
                    return u
                })
            }

        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
                //we've added the array of users from action
                // to the state array!
            }
        }

        default:
            return state;
    }
}

export const followAC = (userId: string) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)


export default usersReducer