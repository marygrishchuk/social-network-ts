import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../redux/store";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const Profile = (props: PropsType) => {

    return <div>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}
        />
    </div>
}