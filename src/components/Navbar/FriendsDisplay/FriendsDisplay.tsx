import {FriendsType} from "../../../redux/navbar-reducer";
import s from "./FriendsDisplay.module.css";
import React from "react";

type PropsType = {
    friends: Array<FriendsType>
}
export const FriendsDisplay = (props: PropsType) => {
    let friends = props.friends.map(f => <div><img src={f.avatar}/><br/>{f.name}</div>)

    return <div className={s.friends}>
        {friends}
    </div>
}