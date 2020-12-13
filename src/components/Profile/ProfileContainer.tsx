import React from "react";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

type PathParamsType = {
    userId?: string | undefined
}

type PropsType = RouteComponentProps<PathParamsType> & {
    profile: null | ProfileType
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '12419'
        }
        profileAPI.getUserProfile(userId).then(data => {
                this.props.setUserProfile(data)
            })

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

export default connect(mapStateToProps,
    {setUserProfile})(withUrlDataContainerComponent)