import {v1} from "uuid";
import {ActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";
import {followSuccess, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching} from "./users-reducer";

export type profileACTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setLikedActionCreator>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

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
        small: undefined | string
        large: undefined | string
    }
}

export type PostType = {
    id: string
    name: string
    avatarUrl: string
    message: string
    liked: boolean
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: null | ProfileType
    status: string
}

//not necessary part since TypeScript is used:
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_LIKED = "SET-LIKED";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState: ProfilePageType = {
    posts: [
        {
            id: v1(),
            name: "Johanna Fox",
            avatarUrl: "https://artsland.ru/files/logos/21246bb6c07d46c71f9b3e51dd7bf1da.png",
            message: "Hi! How are you?",
            liked: true,
            likesCount: 15
        },
        {
            id: v1(),
            name: "Kate Winsley",
            avatarUrl: "https://www.spletnik.ru/thumb/310x310/img/persons/Eva-Mendes-post.jpg",
            message: "I've learned React.",
            liked: true,
            likesCount: 20
        },
        {
            id: v1(),
            name: "Fiona Smith",
            avatarUrl: "https://sun9-53.userapi.com/impf/c846523/v846523336/486aa/WAmlS7FDlqo.jpg?size=400x0&quality=90&crop=6,0,488,488&sign=18d5b99310a2fbe958b38251cab6b5db&c_uniq_tag=arHi9u4Wz5f8hjjNrw4bqf5GiIihueE46UdzBj4g3y0&ava=1",
            message: "Happy Developer's Day!",
            liked: true,
            likesCount: 5
        },
        {
            id: v1(),
            name: "Bob Mayers",
            avatarUrl: "https://bmstu.ru/ps/media/avatars/kartashov/IMG_4688223453130%20(2).jpeg",
            message: "Are we gonna have a class tomorrow?",
            liked: false,
            likesCount: 1
        },
        {
            id: v1(),
            name: "Sandra Dalton",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLTHcfkORUBugIE9Cw71xLu03aUrJIWsPMLg&usqp=CAU",
            message: "Let's get together tonight!:)",
            liked: true,
            likesCount: 7
        }],
    newPostText: "",
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action: ActionTypes) => {
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
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ""
            };
        case UPDATE_NEW_POST_TEXT:
            if (action.newText) {
                return {
                    ...state,
                    newPostText: action.newText
                }
            }
            return state
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)

export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

export const setLikedActionCreator = (postId: string, liked: boolean) =>
    ({type: SET_LIKED, postId: postId, liked: liked} as const)

const setUserProfile = (profile: ProfileType) =>
    ({type: SET_USER_PROFILE, profile} as const)

const setStatus = (status: string) =>
    ({type: SET_STATUS, status} as const)

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getUserProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data))
    })
}

export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    let trimmedStatus = status.trim()
    profileAPI.updateStatus(trimmedStatus).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(trimmedStatus))
        }
    })
}

export default profileReducer