import React, {useEffect, useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
    authUserId: string
    isFetching: boolean
}

export const ProfileStatusWithHooks = (props: PropsType) => {

    let [editMode, setEditMode] = useState(false)
    let [statusText, setStatusText] = useState(props.status)

    useEffect(() => {
        setStatusText(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    const onStatusChange = (inputValue: string) => {
        setStatusText(inputValue)
    }

    const onEnterKeyPress = (key: string) => {
        if (key === "Enter") {
            props.updateUserStatus(statusText);
            deactivateEditMode()
        }
    }

    return <div className={s.description}>
        {props.isFetching
            ? <Preloader/>
            : props.authUserId && editMode
                ? <div>
                    Status: <input autoFocus={true}
                                   value={statusText}
                                   onChange={(e) => onStatusChange(e.currentTarget.value)}
                                   onKeyPress={(e) => onEnterKeyPress(e.key)}
                                   onBlur={deactivateEditMode}
                />
                </div>
                : <div onDoubleClick={activateEditMode}>
                    Status: {props.status}
                </div>
        }
    </div>
}
