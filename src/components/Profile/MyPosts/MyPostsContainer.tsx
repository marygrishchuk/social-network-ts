import React from "react";
import {
    addPostActionCreator,
    PostType,
    setLikedActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ActionTypes, RootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}

type MapDispatchPropsType = {
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
    setLiked: (postId: string, liked: boolean) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    } as const
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },

        updateNewPostText: (newPostText: string) => {
            dispatch(updateNewPostTextActionCreator(newPostText))
        },

        setLiked: (postId: string, liked: boolean) => {
            dispatch(setLikedActionCreator(postId, liked))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer