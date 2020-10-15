import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {NavBarType} from "../../redux/store";

type PropsType = {
    state: NavBarType
}

export const Navbar = (props: PropsType) => {

    let friends = props.state.friends.map( f => <div><img src={f.avatar}/><br/>{f.name}</div>)

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
        <div className={`${s.settings} ${s.linkContainer}`}>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
        </div>
        <div className={s.linkContainer}>
            <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
        </div>
        <div className={s.friends}>
            { friends }
        </div>
    </nav>
}
