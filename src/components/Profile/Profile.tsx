import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/profile-reducer";
import {ActionTypes} from "../../redux/redux-store";

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionTypes) => void
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