import React, {ChangeEvent, KeyboardEvent} from "react";
import {PostType} from "../../../redux/store";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";


type PropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    setLiked: (postId: number, liked: boolean) => void
}

export const MyPosts = (props: PropsType) => {

    let postElements = props.posts.map(p => <Post postId={p.id}
                                                  avatarUrl={p.avatarUrl}
                                                  name={p.name}
                                                  message={p.message}
                                                  liked={p.liked}
                                                  likesCount={p.likesCount}
                                                  setLiked={props.setLiked}
    />)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        if (newPostElement.current !== null) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div className={s.newPost}>
        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}
                  placeholder={"Add a Post"} className={s.textArea}></textarea>
        <button className={s.addButton} onClick={addPost}>Add Post</button>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
}