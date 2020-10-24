import {v1} from "uuid";
import profileReducer, {profileACTypes} from "./profile-reducer";
import dialogsReducer, {dialogsACTypes} from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

export type MessageType = {
    id: string
    message: string
    avatar: string
}
export type DialogType = {
    id: string
    name: string
    avatar: string
}
export type PostType = {
    id: string
    name: string
    avatarUrl: string
    message: string
    liked: boolean
    likesCount: number
}
export type FriendsType = {
    id: string
    name: string
    avatar: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type NavBarType = {
    friends: Array<FriendsType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    navBar: NavBarType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = profileACTypes | dialogsACTypes

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: v1(),
                    name: "Johanna Fox",
                    avatarUrl: "https://artsland.ru/files/logos/21246bb6c07d46c71f9b3e51dd7bf1da.png",
                    message: "Hi! How are you?",
                    liked: true,
                    likesCount: 15
                },
                {
                    id: v1(),
                    name: "Kate Winsley",
                    avatarUrl: "https://www.spletnik.ru/thumb/310x310/img/persons/Eva-Mendes-post.jpg",
                    message: "I've learned React.",
                    liked: true,
                    likesCount: 20
                },
                {
                    id: v1(),
                    name: "Fiona Smith",
                    avatarUrl: "https://sun9-53.userapi.com/impf/c846523/v846523336/486aa/WAmlS7FDlqo.jpg?size=400x0&quality=90&crop=6,0,488,488&sign=18d5b99310a2fbe958b38251cab6b5db&c_uniq_tag=arHi9u4Wz5f8hjjNrw4bqf5GiIihueE46UdzBj4g3y0&ava=1",
                    message: "Happy Developer's Day!",
                    liked: true,
                    likesCount: 5
                },
                {
                    id: v1(),
                    name: "Bob Mayers",
                    avatarUrl: "https://bmstu.ru/ps/media/avatars/kartashov/IMG_4688223453130%20(2).jpeg",
                    message: "Are we gonna have a class tomorrow?",
                    liked: false,
                    likesCount: 1
                },
                {
                    id: v1(),
                    name: "Sandra Dalton",
                    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLTHcfkORUBugIE9Cw71xLu03aUrJIWsPMLg&usqp=CAU",
                    message: "Let's get together tonight!:)",
                    liked: true,
                    likesCount: 7
                }],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [{
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
                },
                {
                    id: v1(),
                    name: "Sasha",
                    avatar: "https://yt3.ggpht.com/a/AATXAJx3tMtZZ9FJWqyZZo8YorLE948V2Fo4dSN3DnrzQQ=s176-c-k-c0x00ffffff-no-rj-mo"
                },
                {
                    id: v1(),
                    name: "Victor",
                    avatar: "https://yt3.ggpht.com/a/AATXAJyx6cm5wmcNQDxMqOnQn-PWLGuUphBLcEZGuIaYYA=s176-c-k-c0x00ffffff-no-rj-mo"
                },
                {
                    id: v1(),
                    name: "Valera",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnjOdeIgaYOFx1p9q_XwIUEYfaQsyBDTcC0g&usqp=CAU"
                }],
            messages: [{
                id: v1(),
                message: "Hi",
                avatar: "https://yt3.ggpht.com/a/AATXAJxOgKlQ3vhAxrV93fA6igEnvBQQfJyvVblmUkCCUw=s176-c-k-c0x00ffffff-no-rj-mo"
            },
                {
                    id: v1(),
                    message: "What's up?",
                    avatar: "https://yt3.ggpht.com/a/AATXAJxOgKlQ3vhAxrV93fA6igEnvBQQfJyvVblmUkCCUw=s176-c-k-c0x00ffffff-no-rj-mo"
                },
                {
                    id: v1(),
                    message: "All good)",
                    avatar: "https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"
                },
                {
                    id: v1(),
                    message: "How are you?",
                    avatar: "https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"
                },
                {
                    id: v1(),
                    message: "I'm fine too",
                    avatar: "https://yt3.ggpht.com/a/AATXAJxOgKlQ3vhAxrV93fA6igEnvBQQfJyvVblmUkCCUw=s176-c-k-c0x00ffffff-no-rj-mo"
                }],
            newMessageText: ""
        },
        navBar: {
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
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navBar = navbarReducer(this._state.navBar, action)

        this._callSubscriber(this._state)

    }
}


declare const window: any
window.store = store
//Store - OOP