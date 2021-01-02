import React from "react";
import s from './ProfileInfo.module.css';

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        statusText: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
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

    render() {
        return <div className={s.description}>
            {this.state.editMode
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