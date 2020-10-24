import {ActionType, ProfilePageType} from "./store";
import {v1} from "uuid";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_LIKED = "SET-LIKED";

const profileReducer = (state: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v1(),
                name: "Anna Bell",
                avatarUrl: "https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg",
                message: state.newPostText,
                liked: false,
                likesCount: 0
            }
            state.posts.splice(0, 0, newPost)
            state.newPostText = ""
            return state;
        case UPDATE_NEW_POST_TEXT:
            if (action.newText) {
                state.newPostText = action.newText
            }
            return state;
        case SET_LIKED:
            let postToLikeOrUnlike = state.posts.find(p => p.id === action.postId)
            if (postToLikeOrUnlike) {
                postToLikeOrUnlike.liked = !action.liked
                if (postToLikeOrUnlike.liked) {
                    postToLikeOrUnlike.likesCount = postToLikeOrUnlike.likesCount + 1
                } else {
                    postToLikeOrUnlike.likesCount = postToLikeOrUnlike.likesCount - 1
                }
            }
            return state;
        default:
            return state;
    }
}

export default profileReducer