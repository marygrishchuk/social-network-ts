import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsDisplayContainer from "./FriendsDisplay/FriendsDisplayContainer";

export const Navbar = () => {

    return <nav className={s.nav}>
        <div className={s.linkContainer}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.linkContainer}>
            <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.linkContainer}>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.linkContainer}>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.linkContainer}>
            <NavLink to="/user-search" activeClassName={s.active}>Find Users</NavLink>
        </div>
        <div className={`${s.settings} ${s.linkContainer}`}>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>
        <FriendsDisplayContainer/>
    </nav>
}
