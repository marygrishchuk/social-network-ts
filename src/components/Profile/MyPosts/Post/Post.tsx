import React from "react";
import s from './Post.module.css';

type PropsType = {
    avatarUrl: string
    message: string
    likesCount: number
}

export const Post = (props: PropsType) => {
    return <div className={s.item}>
        <img src={props.avatarUrl} />
        {props.message}
        <div>
            <span>likes</span> {props.likesCount}
        </div>
    </div>
}