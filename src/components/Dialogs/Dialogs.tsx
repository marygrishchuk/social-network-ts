import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Messages/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {Field, reduxForm} from "redux-form";
import {ProfileType} from "../../redux/profile-reducer";

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    sendMessage: (newMessageText: string) => void
    profile: null | ProfileType
}

export const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem avatar={d.avatar} friendName={d.name}
                                                             id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message myAvatar={props.profile && props.profile.photos.small}
                                                            message={m.message}
                                                            isSentByMe={m.isSentByMe}
    />)

    const onNewMessageSubmit = (formData: any) => {
        props.sendMessage(formData.newMessageBody)
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
            <AddMessageFormRedux onSubmit={onNewMessageSubmit}/>
        </div>
    </div>
}

type AddMessageFormPropsType = any & {}

const AddMessageForm = (props: AddMessageFormPropsType) => {

    return <form className={s.newMessage} onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name={"newMessageBody"} placeholder={"Enter your message"}
                   className={s.textarea}/>
        </div>
        <div>
            <button className={s.btn}>Send</button>
        </div>
    </form>
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)