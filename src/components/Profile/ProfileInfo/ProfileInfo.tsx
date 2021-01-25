import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/profile-reducer";
import userPhoto from "../../../assets/images/user-photo.png";
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks"

type PropsType = {
    profile: null | ProfileType
    status: string
    updateUserStatus: (status: string) => void
    authUserId: string
}

export const ProfileInfo = (props: PropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return <div className={s.profileInfo}>
        {/*<div className={s.coverContainer}>*/}
        {/*    <img className={s.profileCover}*/}
        {/*         src="https://belarusfacts.by/upload/test/photos_png/Tourism/360/preview__3_.jpg"/>*/}
        {/*</div>*/}
        <div className={s.avatarContainer}>
            {props.profile &&
            <img className={s.avatar} src={props.profile.photos.large ? props.profile.photos.large : userPhoto}/>
            }
        </div>
        <div className={s.description}>
            <div>
            {props.profile ? props.profile.fullName : null}
            </div>
            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} authUserId={props.authUserId}/>
            <div>
            Looking for a job:
            {props.profile &&
            props.profile.lookingForAJob ? ' yes' : ' no'}
            </div>
        </div>
    </div>
}