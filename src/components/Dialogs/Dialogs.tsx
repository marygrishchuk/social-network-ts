import React, {KeyboardEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {DialogsPageType} from "../../redux/store";

type PropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    updateNewMessageText: (newMessageText: string) => void
    newMessageText: string
}

export const Dialogs = (props: PropsType) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem avatar={d.avatar} friendName={d.name}
                                                                         id={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message avatar={m.avatar} message={m.message}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        if (newMessageElement.current !== null) {
            props.updateNewMessageText(newMessageElement.current.value)
        }
    }

    let onCtrlEntPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.charCode === 13) {
            addMessage()
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
            <textarea className={s.textarea}
                      ref={newMessageElement}
                      value={props.newMessageText}
                      onChange={onMessageChange}
                      onKeyPress={onCtrlEntPress}>
            </textarea>
                <button className={s.btn} onClick={addMessage}>Send</button>
            </div>
        </div>
    </div>
}