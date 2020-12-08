import React from "react";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import axios from "axios";
import {Profile} from "./Profile";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";

type PropsType = {
    profile: null | ProfileType
    setUserProfile: (profile: null | ProfileType) => void
}

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/12419`)
            .then(response => {
                this.props.setUserProfile(response.data)
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

export default connect(mapStateToProps,
    {setUserProfile})(ProfileContainer)