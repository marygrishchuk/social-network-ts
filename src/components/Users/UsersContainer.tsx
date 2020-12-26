import React from "react";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {follow, getUsers, unfollow, UserType} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {removeFriend, setFriends} from "../../redux/navbar-reducer";


type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<boolean | string>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
    setFriends: (currentPage: number, pageSize: number) => void
    removeFriend: (userId: string) => void
}

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        this.props.setFriends(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => { //arrow syntax is needed to save the call context
        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setFriends(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                setFriends={this.props.setFriends}
                removeFriend={this.props.removeFriend}
                onPageChanged={this.onPageChanged}/>
        </>
    }
}

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<boolean | string>
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users, //state."global state branch"
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {follow, unfollow, getUsers, setFriends, removeFriend})(UsersContainer)