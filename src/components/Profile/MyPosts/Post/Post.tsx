import React from "react";
import s from './Post.module.css';
import likeImg from './like.svg';
import notLikedImg from './notLiked.png';
import userPhoto from "../../../../assets/images/user-photo.png";

type PropsType = {
    postId: string
    isSentByMe: boolean
    name: string
    message: string
    liked: boolean
    likesCount: number
    myAvatar: null | string
    setLiked: (postId: string, liked: boolean) => void
}

export const Post = (props: PropsType) => {
    let onLikeClick = () => {
        props.setLiked(props.postId, props.liked)
    }

    return <div className={s.item}>
        {props.isSentByMe
            ? <img className={s.ava} src={props.myAvatar
                ? props.myAvatar
                : userPhoto}/>
            : <img className={s.ava} src={userPhoto}/>
        }
        <div className={s.name}>{props.name}:</div>
        <div className={s.message}>{props.message}</div>
        <div>
            <img onClick={onLikeClick} className={s.like} src={props.liked ? likeImg : notLikedImg}/> {props.likesCount}
        </div>
    </div>
}