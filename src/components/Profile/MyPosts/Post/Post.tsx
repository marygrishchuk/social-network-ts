import React from "react";
import s from './Post.module.css';
import likeImg from './like.svg';

type PropsType = {
    avatarUrl: string
    name: string
    message: string
    likesCount: number
}

export const Post = (props: PropsType) => {
    return <div className={s.item}>
        <img className={s.ava} src={props.avatarUrl} />
        <div className={s.name}>{props.name}:</div>
        <div className={s.message}>{props.message}</div>
        <div>
            <img className={s.like} src={likeImg} /> {props.likesCount}
        </div>
    </div>
}