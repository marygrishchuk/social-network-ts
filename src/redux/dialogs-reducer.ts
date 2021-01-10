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
    isSentByMe: boolean
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type dialogsACTypes = ReturnType<typeof sendMessageCreator>

const SEND_MESSAGE = "SEND-MESSAGE";

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
            avatar: userPhoto
        },
        {
            id: v1(),
            name: "Sveta",
            avatar: userPhoto
        },
        {
            id: v1(),
            name: "Sasha",
            avatar: userPhoto
        },
        {
            id: v1(),
            name: "Victor",
            avatar: userPhoto
        },
        {
            id: v1(),
            name: "Valera",
            avatar: userPhoto
        }
    ],
    messages: [
        {
            id: v1(),
            message: "Hi",
            isSentByMe: false,
        },
        {
            id: v1(),
            message: "What's up?",
            isSentByMe: true,
        },
        {
            id: v1(),
            message: "All good)",
            isSentByMe: false,
        }
    ]
}

const dialogsReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: v1(),
                message: action.newMessageText,
                isSentByMe: true
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageText: string) => ({type: SEND_MESSAGE, newMessageText} as const)

export default dialogsReducer