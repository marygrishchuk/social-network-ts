import s from "./FriendsDisplay.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/user-photo.png"
import {UserType} from "../../../redux/users-reducer";

type PropsType = {
    users: Array<UserType>
}
export const FriendsDisplay = (props: PropsType) => {
    let friends = props.users.filter(u => u.followed === true).slice(0, 3).map(u => <span key={u.id}>
        <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
            </NavLink>
            <div>
            {u.name}
            </div>
        </span>
    )

    return <div className={s.friends}>
        {friends}
    </div>
}