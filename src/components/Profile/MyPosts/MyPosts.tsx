import React, {ChangeEvent, KeyboardEvent} from "react";
import {PostType} from "../../../redux/profile-reducer";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";


type PropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    setLiked: (postId: string, liked: boolean) => void
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

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    let onCtrlEnterPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.charCode === 13) {
            onAddPost()
        }
    }

    return <div className={s.postsBlock}>
        <h3>My Posts</h3>
        <div className={s.newPost}>
        <textarea className={s.textArea}
                  value={props.newPostText}
                  onChange={onPostChange}
                  onKeyPress={onCtrlEnterPress}
                  placeholder={"Add a Post"}>
        </textarea>
            <button className={s.addButton} onClick={onAddPost}>Add Post</button>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
}