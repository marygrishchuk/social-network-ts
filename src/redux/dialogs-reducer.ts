import {ActionType, DialogsPageType, RootStateType} from "./store";
import {v1} from "uuid";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: v1(),
                message: state.newMessageText,
                avatar: "https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"
            }
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        case UPDATE_NEW_MESSAGE_BODY:
            if (action.body) {
                state.newMessageText = action.body

            }
            return state
        default:
            return state;
    }
}

export default dialogsReducer