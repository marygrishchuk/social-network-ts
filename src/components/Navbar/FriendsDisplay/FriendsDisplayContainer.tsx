import React from "react";
import {FriendsDisplay} from "./FriendsDisplay";
import {RootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {follow, getUsers, unfollow, UserType} from "../../../redux/users-reducer";
import {removeFriend, setFriends} from "../../../redux/navbar-reducer";
import Preloader from "../../common/Preloader/Preloader";
import s from "./FriendsDisplay.module.css";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

type PropsType = {
    friends: Array<UserType>
    currentPage: number
    pageSize: number
    isFetchingFriends: boolean
    setFriends: (currentPage: number, pageSize: number) => void
}

class FriendsDisplayContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.setFriends(this.props.currentPage, this.props.pageSize)
    }
    render() {
        return <>
            {this.props.isFetchingFriends
                ? <Preloader />
                : <FriendsDisplay friends={this.props.friends}/>}
        </>
    }
}


type MapStatePropsType = {
    friends: Array<UserType>
    currentPage: number
    pageSize: number
    isFetchingFriends: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        friends: state.navBar.friends,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetchingFriends: state.navBar.isFetchingFriends
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {setFriends}),
    withAuthRedirect)(FriendsDisplayContainer)