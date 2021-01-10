import React from "react";
import {DialogsPageType, sendMessageCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionTypes, RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ProfileType} from "../../redux/profile-reducer";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    profile: null | ProfileType
}

type MapDispatchPropsType = {
    sendMessage: (newMessageText: string) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        profile: state.profilePage.profile
    } as const
}

const mapDispatchToProps = (dispatch: (action: ActionTypes) => void): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageText: string) => {
            dispatch(sendMessageCreator(newMessageText))
        }
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)