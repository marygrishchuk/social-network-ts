import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    avatar: string
    friendName: string
    id: number
}

export const DialogItem = (props: PropsType) => {
    return <div className={s.dialog}>
        <img src={props.avatar} />
        <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.friendName}</NavLink>
    </div>
}