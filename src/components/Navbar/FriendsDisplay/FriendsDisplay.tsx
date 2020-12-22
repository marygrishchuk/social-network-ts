import s from "./FriendsDisplay.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user-photo.png"
import {UserType} from "../../../redux/users-reducer";

type PropsType = {
    friends: Array<UserType>
}
export const FriendsDisplay = (props: PropsType) => {
    let friends = props.friends.filter((i, index) => (index < 3))
        .map((f) => {
                return <span key={f.id}>
        <NavLink to={'/profile/' + f.id}>
                <img src={f.photos.small != null ? f.photos.small : userPhoto}/>
            </NavLink>
            <div>
            {f.name}
            </div>
        </span>
            }
        )

    return <div className={s.friends}>
        {friends}
    </div>
}