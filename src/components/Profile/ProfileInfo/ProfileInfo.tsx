import React from "react";
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return <div className={s.profileInfo}>
        <div className={s.coverContainer}>
            <img className={s.profileCover}
                 src="https://belarusfacts.by/upload/test/photos_png/Tourism/360/preview__3_.jpg"/>
        </div>
        <div className={s.avatarContainer}>
            <img className={s.avatar}
                 src="https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"/>
        </div>
        <div className={s.description}>
            Anna Bell
            <br/>
            City: Minsk
        </div>
    </div>
}