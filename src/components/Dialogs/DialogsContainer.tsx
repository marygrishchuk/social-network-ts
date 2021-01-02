import React from "react";
import {DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionTypes, RootStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    sendMessage: () => void
    updateNewMessageBody: (newMessageText: string) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    } as const
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void): MapDispatchPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },

        updateNewMessageBody: (newMessageText: string) => {
            dispatch(updateNewMessageBodyCreator(newMessageText))
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)