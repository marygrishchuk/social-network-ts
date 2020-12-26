import React, {ChangeEvent, KeyboardEvent, useRef} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import { Redirect } from "react-router-dom";

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewMessageBody: (newMessageText: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem avatar={d.avatar} friendName={d.name}
                                                                         id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message avatar={m.avatar} message={m.message}/>)

    let newMessageBody = state.newMessageText

    const textarea = useRef<HTMLTextAreaElement>(null)

    let onSendMessageClick = () => {
        props.sendMessage()
        textarea.current?.focus()

    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    let onCtrlEntPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.charCode === 13) {
            onSendMessageClick()
        }
    }

    return <div className={s.dialogs}>
        <div className={s.dialogItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            <div className={s.chat}>
                {messagesElements}
            </div>
            <br/>
            <div className={s.newMessage}>
                <div>
                    <textarea className={s.textarea}
                              value={newMessageBody}
                              onChange={onNewMessageChange}
                              onKeyPress={onCtrlEntPress}
                              placeholder={"Enter your message"}
                              ref={textarea}
                              autoFocus>
                    </textarea>
                </div>
                <div>
                    <button className={s.btn} onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    </div>
}