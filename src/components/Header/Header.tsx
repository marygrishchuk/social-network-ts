import React from "react";
import s from './Header.module.css';
import logo from './logo.png';
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import {submitLogOut} from "../../redux/auth-reducer";

type PropsType = {
    isAuth: boolean
    login: string
    isFetching: boolean
    submitLogOut: () => void
}

export const Header = (props: PropsType) => {
    return <header className={s.header}>

        <img src={`${logo}`} />

        <div className={s.loginBlock}>
            {props.isFetching ? <Preloader/> :
            props.isAuth
                ? <div>{props.login} <button onClick={props.submitLogOut}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>

    </header>
}