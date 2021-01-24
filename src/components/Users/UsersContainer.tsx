import React from "react";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {follow, requestUsers, unfollow, UserType} from "../../redux/users-reducer";
import Users from "./Users";
import {addFriend, getFriendsFromPage, removeFriend} from "../../redux/navbar-reducer";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<boolean | string>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    getFriendsFromPage: (currentPage: number, pageSize: number) => void
    addFriend: (userId: string) => void
    removeFriend: (userId: string) => void
    isAuth: boolean
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
        this.props.getFriendsFromPage(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => { //arrow syntax is needed to save the call context
        this.props.requestUsers(pageNumber, this.props.pageSize)
        this.props.getFriendsFromPage(pageNumber, this.props.pageSize)
    }

    render() {
        return <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
            addFriend={this.props.addFriend}
            removeFriend={this.props.removeFriend}
            onPageChanged={this.onPageChanged}
            isFetching={this.props.isFetching}
            isAuth={this.props.isAuth}
        />
    }
}

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<boolean | string>
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingProgress(state),
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    requestUsers,
    addFriend,
    getFriendsFromPage,
    removeFriend
})(UsersContainer)