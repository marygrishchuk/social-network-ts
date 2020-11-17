import React from "react";
import {ActionTypes, RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";

type MapStatePropsType = {
    users: Array<UserType>
}

type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users, //state."global state branch"
    } as const
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void): MapDispatchPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)
//shorter than before:
// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
// export default UsersContainer