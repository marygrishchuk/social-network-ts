import React from "react";
import {
    addPostActionCreator,
    setLikedActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import {StoreType} from "../../../redux/redux-store";
import {MyPosts} from "./MyPosts";


type PropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: PropsType) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (newPostText: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(newPostText))
    }

    let onLikeClick = (postId: string, liked: boolean) => {
        props.store.dispatch(setLikedActionCreator(postId, liked))
    }

    return <MyPosts
        addPost={addPost}
        updateNewPostText={onPostChange}
        posts={state.profilePage.posts}
        setLiked={onLikeClick}
        newPostText={state.profilePage.newPostText}/>
}