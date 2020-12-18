import {v1} from "uuid";
import {ActionTypes} from "./redux-store";
import userPhoto from "../assets/images/user-photo.png"

export type DialogType = {
    id: string
    name: string
    avatar: string
}
export type MessageType = {
    id: string
    message: string
    avatar: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type dialogsACTypes = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState: DialogsPageType = {
    dialogs: [
        {
            id: v1(),
            name: "Dimych",
            avatar: userPhoto
        },
        {
            id: v1(),
            name: "Andrey",
            avatar: "https://yt3.ggpht.com/a/AATXAJwpXLyeWh28awYmQxqSPXIM6q9eyw4vbkkCf-nJ=s176-c-k-c0x00ffffff-no-rj-mo"
        },
        {
            id: v1(),
            name: "Sveta",
            avatar: "https://yt3.ggpht.com/a/AATXAJxOgKlQ3vhAxrV93fA6igEnvBQQfJyvVblmUkCCUw=s176-c-k-c0x00ffffff-no-rj-mo"
        },
        {
            id: v1(),
            name: "Sasha",
            avatar: "https://yt3.ggpht.com/a/AATXAJx3tMtZZ9FJWqyZZo8YorLE948V2Fo4dSN3DnrzQQ=s176-c-k-c0x00ffffff-no-rj-mo"
        },
        {
            id: v1(),
            name: "Victor",
            avatar: "https://yt3.ggpht.com/a/AATXAJyx6cm5wmcNQDxMqOnQn-PWLGuUphBLcEZGuIaYYA=s176-c-k-c0x00ffffff-no-rj-mo"
        },
        {
            id: v1(),
            name: "Valera",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnjOdeIgaYOFx1p9q_XwIUEYfaQsyBDTcC0g&usqp=CAU"
        }
    ],
    messages: [
        {
            id: v1(),
            message: "Hi",
            avatar: "https://yt3.ggpht.com/a/AATXAJxOgKlQ3vhAxrV93fA6igEnvBQQfJyvVblmUkCCUw=s176-c-k-c0x00ffffff-no-rj-mo"
        },
        {
            id: v1(),
            message: "What's up?",
            avatar: "https://yt3.ggpht.com/a/AATXAJxOgKlQ3vhAxrV93fA6igEnvBQQfJyvVblmUkCCUw=s176-c-k-c0x00ffffff-no-rj-mo"
        },
        {
            id: v1(),
            message: "All good)",
            avatar: "https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"
        },
        {
            id: v1(),
            message: "How are you?",
            avatar: "https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"
        },
        {
            id: v1(),
            message: "I'm fine too",
            avatar: "https://yt3.ggpht.com/a/AATXAJxOgKlQ3vhAxrV93fA6igEnvBQQfJyvVblmUkCCUw=s176-c-k-c0x00ffffff-no-rj-mo"
        }
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: v1(),
                message: state.newMessageText,
                avatar: "https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ""
            }
        case UPDATE_NEW_MESSAGE_BODY:
            if (action.body) {
                return {
                    ...state,
                    newMessageText: action.body
                }
            }
            return state
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)

export const updateNewMessageBodyCreator = (text: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text} as const)

export default dialogsReducer