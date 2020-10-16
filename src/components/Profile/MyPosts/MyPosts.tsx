import React from "react";
import { PostType } from "../../../redux/store";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

export const MyPosts = (props: PropsType) => {

    let postElements = props.posts.map(p => <Post avatarUrl={p.avatarUrl} name={p.name} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<any>()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}
                  placeholder={"Start a Post"} className={s.textArea}></textarea>
        <button className={s.addButton} onClick={ addPost }>Add Post</button>
        <div className={s.posts}>
            { postElements }
        </div>
    </div>
}