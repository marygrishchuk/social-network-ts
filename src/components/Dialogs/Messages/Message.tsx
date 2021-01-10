import React from "react";
import s from './Message.module.css';
import userPhoto from "../../../assets/images/user-photo.png"

type PropsType = {
    myAvatar: null | string
    message: string
    isSentByMe: boolean
}

export const Message = (props: PropsType) => {

    return <div
        className={props.isSentByMe ?
            `${s.rightSide}` : `${s.leftSide}`}>
        {!props.isSentByMe &&
        <img src={userPhoto}/>}
        <span className={s.message}> {props.message}</span>
        {props.isSentByMe &&
        <img src={props.myAvatar
            ? props.myAvatar
            : userPhoto}/>}
    </div>
}