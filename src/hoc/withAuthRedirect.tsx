import React from "react";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapPropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: RootStateType) => ({isAuth: state.auth.isAuth} as MapPropsType)

type DispatchPropsType = {}

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    function RedirectComponent(props: MapPropsType & DispatchPropsType) {
        let {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to={"/login"}/>
        return <WrappedComponent {...restProps as WCP}/>
    }

    let ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, RootStateType>(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}