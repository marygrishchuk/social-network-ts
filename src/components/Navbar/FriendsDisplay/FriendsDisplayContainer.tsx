import React from "react";
import {FriendsDisplay} from "./FriendsDisplay";
import {RootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {FriendDisplayType} from "../../../redux/navbar-reducer";
import {compose} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {}

type PropsType = RouteComponentProps<PathParamsType> & {
    friends: Array<FriendDisplayType>
    isAuth: boolean
}

class FriendsDisplayContainer extends React.Component<PropsType> {
    render() {
        if (!this.props.isAuth) return null
        return <FriendsDisplay friends={this.props.friends}/>
    }
}

type MapStatePropsType = {
    friends: Array<FriendDisplayType>
    isAuth: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        friends: state.navBar.friends,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {}))(FriendsDisplayContainer)
//withRouter is necessary here as well as in App.tsx for functioning of FriendsDisplay that contains Navlink