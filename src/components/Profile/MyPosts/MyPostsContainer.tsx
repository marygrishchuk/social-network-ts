import React from "react";
import {
    addPostActionCreator,
    setLikedActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";


export const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                if (store) {
                    let state = store.getState()

                    let addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }

                    let onPostChange = (newPostText: string) => {
                        store.dispatch(updateNewPostTextActionCreator(newPostText))
                    }

                    let onLikeClick = (postId: string, liked: boolean) => {
                        store.dispatch(setLikedActionCreator(postId, liked))
                    }

                    return <MyPosts
                        addPost={addPost}
                        updateNewPostText={onPostChange}
                        posts={state.profilePage.posts}
                        setLiked={onLikeClick}
                        newPostText={state.profilePage.newPostText}/>
                }
            }
        }
    </StoreContext.Consumer>
}