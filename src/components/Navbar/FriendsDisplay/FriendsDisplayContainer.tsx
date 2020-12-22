import React from "react";
import {FriendsDisplay} from "./FriendsDisplay";
import {RootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {UserType} from "../../../redux/users-reducer";
import {setFriends} from "../../../redux/navbar-reducer";

type PropsType = {
    friends: Array<UserType>
    setFriends: () => void
}

class FriendsDisplayContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.setFriends()
    }
    render() {
        return <>
            <FriendsDisplay friends={this.props.friends}/>
        </>
    }
}


type MapStatePropsType = {
    friends: Array<UserType>
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        friends: state.navBar.friends,
    }
}

export default connect(mapStateToProps, {setFriends})(FriendsDisplayContainer)