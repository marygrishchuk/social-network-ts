import React from "react";
import {FriendsDisplay} from "./FriendsDisplay";
import {ActionTypes, RootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {FriendsType} from "../../../redux/navbar-reducer";

type MapStatePropsType = {
    friends: Array<FriendsType>
}

type MapDispatchPropsType = {
    //no callbacks yet
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        friends: state.navBar.friends
    } as const
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void): MapDispatchPropsType => {
    return {
        //no callbacks yet
    }
}

const FriendsDisplayContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsDisplay)

export default FriendsDisplayContainer