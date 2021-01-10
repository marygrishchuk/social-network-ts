import React from "react";
import {addPostActionCreator, PostType, ProfileType, setLikedActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ActionTypes, RootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    posts: Array<PostType>
    profile: null | ProfileType
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
    setLiked: (postId: string, liked: boolean) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    } as const
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void): MapDispatchPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        },

        setLiked: (postId: string, liked: boolean) => {
            dispatch(setLikedActionCreator(postId, liked))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer