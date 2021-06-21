import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsDisplayContainer from "./FriendsDisplay/FriendsDisplayContainer";
import {PATH} from "../../App";

export const Navbar = () => {

    return <nav className={s.nav}>
        <div className={s.linkContainer}>
            <NavLink to={PATH.PROFILE} activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.linkContainer}>
            <NavLink to={PATH.DIALOGS} activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.linkContainer}>
            <NavLink to={PATH.NEWS} activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.linkContainer}>
            <NavLink to={PATH.MUSIC} activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.linkContainer}>
            <NavLink to={PATH.USERS} activeClassName={s.active}>Users</NavLink>
        </div>
        <div className={`${s.settings} ${s.linkContainer}`}>
            <NavLink to={PATH.SETTINGS} activeClassName={s.active}>Settings</NavLink>
        </div>
        <FriendsDisplayContainer/>
    </nav>
}
