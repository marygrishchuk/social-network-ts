import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type PropsType = {
    profile: null | ProfileType
}


export const Profile = (props: PropsType) => {

    return <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer />
    </div>
}