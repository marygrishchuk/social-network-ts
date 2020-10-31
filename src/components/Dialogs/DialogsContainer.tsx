import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";


export const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                if (store) {
                    let state = store.getState().dialogsPage

                    let sendMessage = () => {
                        store.dispatch(sendMessageCreator())
                    }

                    let onNewMessageChange = (newMessageText: string) => {
                        store.dispatch(updateNewMessageBodyCreator(newMessageText))
                    }

                    return <Dialogs dialogsPage={state}
                                    sendMessage={sendMessage}
                                    updateNewMessageBody={onNewMessageChange}/>
                }
            }
        }
    </StoreContext.Consumer>
}