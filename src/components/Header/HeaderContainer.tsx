import React from "react";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {Header} from "./Header";
import {setAuthUserData, toggleIsFetching} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

type PropsType = {
    isFetching: boolean
    isAuth: boolean
    login: string
    setAuthUserData: (id: string, email: string, login: string) => void
    toggleIsFetching: (isFetching: boolean) => void
}

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        authAPI.getAuth().then(data => {
                if (data.resultCode === 0) {
                    this.props.toggleIsFetching(false)
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })

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
    {setAuthUserData, toggleIsFetching})(HeaderContainer)