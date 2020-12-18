import React from "react";
import {FriendsDisplay} from "./FriendsDisplay";
import {RootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {toggleIsFetching} from "../../../redux/navbar-reducer";
import {UserType} from "../../../redux/users-reducer";

type PropsType = {
    users: Array<UserType>
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
}

class FriendsDisplayContainer extends React.Component<PropsType> {
    render() {

        return <>
            <FriendsDisplay users={this.props.users}/>
        </>
    }
}


type MapStatePropsType = {
    isFetching: boolean
    users: Array<UserType>
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isFetching: state.navBar.isFetching,
        users: state.usersPage.users
    }
}

export default connect(mapStateToProps, {toggleIsFetching})(FriendsDisplayContainer)