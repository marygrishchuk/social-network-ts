import React from "react";
import s from './ProfileInfo.module.css';

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
    authUserId: string
}

type StateType = {
    editMode: boolean
    statusText: string
}

export class ProfileStatus extends React.Component<PropsType> {
    state: StateType = {
        editMode: false,
        statusText: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
            statusText: this.props.status
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
            statusText: this.props.status
        })
    }

    onStatusChange = (inputValue: string) => {
        this.setState({
            statusText: inputValue
        })
    }

    componentDitUpdate(prevProps: PropsType, prevState: StateType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                statusText: this.props.status
            })
        }
    }

    render() {
        return <div className={s.description}>
            {this.props.authUserId && this.state.editMode
                ? <div>
                    Status: <input autoFocus={true}
                                   value={this.state.statusText}
                                   onChange={(e) => this.onStatusChange(e.currentTarget.value)}
                                   onKeyPress={(e) => {
                                       if (e.key === "Enter") {
                                           this.props.updateUserStatus(this.state.statusText);
                                           this.deactivateEditMode()
                                       }
                                   }}
                                   onBlur={this.deactivateEditMode}
                />
                </div>
                : <div onDoubleClick={this.activateEditMode}>
                    Status: {this.props.status}
                </div>
            }
        </div>
    }
}