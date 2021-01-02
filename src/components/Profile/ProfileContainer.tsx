import React from "react";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {getUserProfile, ProfileType, updateUserStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId?: string | undefined
}

export type PropsType = RouteComponentProps<PathParamsType> & {
    profile: null | ProfileType
    authUserId: string
    status: string
    getUserProfile: (userId: string) => void
    updateUserStatus: (status: string) => void
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserId
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props} />
    }
}

type MapStatePropsType = {
    profile: null | ProfileType
    authUserId: string
    status: string
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile, //state."global state branch",
        authUserId: state.auth.id,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfile, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)