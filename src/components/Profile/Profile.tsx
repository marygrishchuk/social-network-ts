import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";

type PropsType = {
    profile: null | ProfileType
    status: string
    updateUserStatus: (status: string) => void
}


export const Profile = (props: PropsType) => {

    return <div>
        <ProfileInfo {...props}/>
        <MyPostsContainer />
    </div>
}