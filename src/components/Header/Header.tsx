import React from "react";
import s from './Header.module.css';
import logo from '../../assets/images/logo.png';
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

type PropsType = {
    isAuth: boolean
    login: string
    isFetching: boolean
    id: string
    logout: () => void
}

export const Header = (props: PropsType) => {
    return <header className={s.header}>

        <img src={`${logo}`}/>

        <div className={s.loginBlock}>
            {props.isFetching ? <Preloader/> :
                props.isAuth
                    ? <div>
                        <NavLink to={'/profile/' + props.id}>{props.login}</NavLink>
                        <NavLink to={'/login'}><button onClick={props.logout}>Log out</button></NavLink>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>

    </header>
}