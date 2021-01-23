import React from "react";
import {FriendsDisplay} from "./FriendsDisplay";
import {RootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {NavLink} from "react-router-dom";
import {FriendDisplayType} from "../../../redux/navbar-reducer";

type PropsType = {
    friends: Array<FriendDisplayType>
    currentPage: number
    pageSize: number
    isFetchingFriends: boolean
}

class FriendsDisplayContainer extends React.Component<PropsType> {
    render() {
        return <>
            {this.props.friends.length === 0
                ? <button><NavLink to="/users">Find Friends</NavLink></button>
                : <FriendsDisplay friends={this.props.friends}/>}
        </>
    }
}


type MapStatePropsType = {
    friends: Array<FriendDisplayType>
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

export default compose<React.ComponentType>(connect(mapStateToProps, {}),
    withAuthRedirect)(FriendsDisplayContainer)