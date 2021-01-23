import {RootStateType} from "./redux-store";

export const getUsers = (state: RootStateType) => {
    return state.usersPage.users
}

export const getPage = (state: RootStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: RootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingProgress = (state: RootStateType) => {
    return state.usersPage.followingInProgress
}