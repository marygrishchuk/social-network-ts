import React from "react";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {ProfileType, getUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PathParamsType = {
    userId?: string | undefined
}

export type PropsType = RouteComponentProps<PathParamsType> & {
    profile: null | ProfileType
    getUserProfile: (userId: string) => void
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '12419'
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

type MapStatePropsType = {
    profile: null | ProfileType
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile, //state."global state branch"
    }
}

const withUrlDataContainerComponent = withRouter(ProfileContainer)

export default withAuthRedirect(connect(mapStateToProps,
    {getUserProfile})(withUrlDataContainerComponent))