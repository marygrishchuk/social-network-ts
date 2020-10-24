import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {sendMessageCreator, updateNewMessageBodyCreator, StoreType} from "../../redux/store";

type PropsType = {
    store: StoreType
}

export const Dialogs = (props: PropsType) => {
    let state = props.store.getState()

    let dialogsElements = state.dialogsPage.dialogs.map(d => <DialogItem avatar={d.avatar} friendName={d.name}
                                                                         id={d.id}/>)
    let messagesElements = state.dialogsPage.messages.map(m => <Message avatar={m.avatar} message={m.message}/>)

    let newMessageBody = state.dialogsPage.newMessageText

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
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