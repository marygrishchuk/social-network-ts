import {v1} from "uuid";
import {ActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type profileACTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setLikedActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setIsFetching>

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    }
    lookingForAJob: null | boolean
    lookingForAJobDescription: null | string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type PostType = {
    id: string
    name: string
    isSentByMe: boolean
    message: string
    liked: boolean
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    profile: null | ProfileType
    status: string
    isFetching: boolean
}

//not necessary part since TypeScript is used:
const ADD_POST = "SN/PROFILE/ADD-POST";
const SET_LIKED = "SN/PROFILE/SET-LIKED";
const SET_USER_PROFILE = "SN/PROFILE/SET_USER_PROFILE";
const SET_STATUS = "SN/PROFILE/SET_STATUS";
const SET_IS_FETCHING = "SN/PROFILE/SET_IS_FETCHING";

let initialState: ProfilePageType = {
    posts: [
        {
            id: v1(),
            name: "Johanna Fox",
            isSentByMe: false,
            message: "Hi! How are you?",
            liked: true,
            likesCount: 15
        },
        {
            id: v1(),
            name: "Kate Winsley",
            isSentByMe: false,
            message: "I've learned React.",
            liked: true,
            likesCount: 20
        },
        {
            id: v1(),
            name: "Fiona Smith",
            isSentByMe: false,
            message: "Happy Developer's Day!",
            liked: true,
            likesCount: 5
        },
        {
            id: v1(),
            name: "Bob Mayers",
            isSentByMe: false,
            message: "Are we gonna have a class tomorrow?",
            liked: false,
            likesCount: 1
        },
        {
            id: v1(),
            name: "Sandra Dalton",
            isSentByMe: false,
            message: "Let's get together tonight!:)",
            liked: true,
            likesCount: 7
        }],
    profile: null,
    status: "",
    isFetching: false
}

const profileReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: v1(),
                name: "me",
                isSentByMe: true,
                message: action.newPostText,
                liked: false,
                likesCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
            };
        case SET_LIKED:
            let stateCopy = {
                ...state,
                posts: [...state.posts]
            }
            let postToLikeOrUnlike = stateCopy.posts.find(p => p.id === action.postId)
            if (postToLikeOrUnlike) {
                postToLikeOrUnlike.liked = !action.liked
                if (postToLikeOrUnlike.liked) {
                    postToLikeOrUnlike.likesCount = postToLikeOrUnlike.likesCount + 1
                } else {
                    postToLikeOrUnlike.likesCount = postToLikeOrUnlike.likesCount - 1
                }
            }
            return stateCopy;
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state, status: action.status};
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)

export const setLikedActionCreator = (postId: string, liked: boolean) =>
    ({type: SET_LIKED, postId: postId, liked: liked} as const)

const setUserProfile = (profile: ProfileType) =>
    ({type: SET_USER_PROFILE, profile} as const)

const setStatus = (status: string) =>
    ({type: SET_STATUS, status} as const)

const setIsFetching = (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching} as const)

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
    dispatch(setIsFetching(true))
    profileAPI.getStatus(userId).then(data => {
        if (data) {
            dispatch(setIsFetching(false))
            dispatch(setStatus(data))
        }
    })
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    let trimmedStatus = status.trim()
    dispatch(setIsFetching(true))
    profileAPI.updateStatus(trimmedStatus).then(data => {
        if (data.resultCode === 0) {
            dispatch(setIsFetching(false))
            dispatch(setStatus(trimmedStatus))
        }
    })
}

export default profileReducer