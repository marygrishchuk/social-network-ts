import React from "react";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Header} from "./Header";
import {getAuthUserData, submitLogOut} from "../../redux/auth-reducer";

type PropsType = {
    isFetching: boolean
    isAuth: boolean
    login: string
    getAuthUserData: () => void
    submitLogOut: () => void
}

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}

type MapStatePropsType = {
    isAuth: boolean
    login: string
    isFetching: boolean
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        isFetching: state.auth.isFetching
    }
}

export default connect(mapStateToProps,
    {getAuthUserData, submitLogOut})(HeaderContainer)