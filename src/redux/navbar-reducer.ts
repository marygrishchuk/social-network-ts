import { v1 } from "uuid";
import {ActionTypes} from "./redux-store";

export type FriendsType = {
    id: string
    name: string
    avatar: string
}
export type NavBarType = {
    friends: Array<FriendsType>
}

let initialState: NavBarType = {
    friends: [{
        id: v1(),
        name: "Dimych",
        avatar: "https://yt3.ggpht.com/a/AATXAJxegcKj7lnz8MCMgcAz-gpSgPs5u5yMvynOEWiL=s48-c-k-c0xffffffff-no-rj-mo"
    },
        {
            id: v1(),
            name: "Andrey",
            avatar: "https://yt3.ggpht.com/a/AATXAJwpXLyeWh28awYmQxqSPXIM6q9eyw4vbkkCf-nJ=s176-c-k-c0x00ffffff-no-rj-mo"
        },
        {
            id: v1(),
            name: "Sveta",
            avatar: "https://yt3.ggpht.com/a/AATXAJxOgKlQ3vhAxrV93fA6igEnvBQQfJyvVblmUkCCUw=s176-c-k-c0x00ffffff-no-rj-mo"
        }]
}

const navbarReducer = (state = initialState, action: ActionTypes) => {

    return state;
}

export default navbarReducer