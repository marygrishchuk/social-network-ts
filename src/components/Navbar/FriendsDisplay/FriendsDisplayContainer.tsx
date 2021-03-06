import React from "react";
import {FriendsDisplay} from "./FriendsDisplay";
import {RootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {FriendDisplayType, getFriends} from "../../../redux/navbar-reducer";
import {compose} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getCurrentPage, getPageSize} from "../../../redux/users-selectors";

type PathParamsType = {}

type PropsType = RouteComponentProps<PathParamsType> & {
    friends: Array<FriendDisplayType>
    isAuth: boolean
    pageSize: number
    currentPage: number
    getFriends: (currentPage: number, pageSize: number, friend: boolean) => void
}

class FriendsDisplayContainer extends React.Component<PropsType> {
    componentDidMount() {
        if (this.props.isAuth) this.props.getFriends(this.props.currentPage, this.props.pageSize, true)
    }

    render() {
        if (!this.props.isAuth) return null
        return <FriendsDisplay friends={this.props.friends}/>
    }
}

type MapStatePropsType = {
    friends: Array<FriendDisplayType>
    isAuth: boolean
    pageSize: number
    currentPage: number
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        friends: state.navBar.friends,
        isAuth: state.auth.isAuth,
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
    }
}

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {getFriends}))(FriendsDisplayContainer)
//withRouter is necessary here as well as in App.tsx for functioning of FriendsDisplay that contains Navlink