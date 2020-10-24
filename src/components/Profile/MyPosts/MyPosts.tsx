import React, {ChangeEvent, KeyboardEvent} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";
import {ActionType, PostType} from "../../../redux/store";
import {mkdtemp} from "fs";


type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const MyPosts = (props: PropsType) => {

    let postElements = props.posts.map(p => <Post postId={p.id}
                                                  avatarUrl={p.avatarUrl}
                                                  name={p.name}
                                                  message={p.message}
                                                  liked={p.liked}
                                                  likesCount={p.likesCount}
                                                  dispatch={props.dispatch}
    />)

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    let onCtrlEnterPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.charCode === 13) {
            addPost()
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
            <button className={s.addButton} onClick={addPost}>Add Post</button>
        </div>
        <div className={s.posts}>
            {postElements}
        </div>
    </div>
}