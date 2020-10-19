import React from "react";
import s from './Message.module.css'

type PropsType = {
    avatar: string
    message: string
}

export const Message = (props: PropsType) => {

    return <div
        className={props.avatar === "https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg" ?
            `${s.rightSide}` : `${s.leftSide}`}>
        {props.avatar !== "https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg" &&
        <img src={props.avatar}/>}
        <span className={s.message}> {props.message}</span>
        {props.avatar === "https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg" &&
        <img src={props.avatar}/>}
    </div>
}