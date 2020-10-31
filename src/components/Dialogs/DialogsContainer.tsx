import React, {ChangeEvent, KeyboardEvent, useRef} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type PropsType = {
    store: StoreType
}

export const DialogsContainer = (props: PropsType) => {
    let state = props.store.getState().dialogsPage

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator())

    }

    let onNewMessageChange = (newMessageText: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(newMessageText))
    }

    return <Dialogs dialogsPage={state}
                    sendMessage={sendMessage}
                    updateNewMessageBody={onNewMessageChange} />
}