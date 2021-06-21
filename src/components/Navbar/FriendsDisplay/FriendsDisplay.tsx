import s from "./FriendsDisplay.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user-photo.png"
import {FriendDisplayType} from "../../../redux/navbar-reducer";

type PropsType = {
    friends: Array<FriendDisplayType>
}
export const FriendsDisplay = React.memo((props: PropsType) => {
    let friends = props.friends.filter((i, index) => (index < 3))
        .map((f) => {
                return <span key={f.userId} className={s.item}>
        <NavLink to={'/profile/' + f.userId}>
                <img src={f.avatar != null ? f.avatar : userPhoto} alt={'avatar'}/>
            </NavLink>
            <div>
            {f.fullName}
            </div>
        </span>
            }
        )

    return <div className={s.friends}>
        {friends}
    </div>
})