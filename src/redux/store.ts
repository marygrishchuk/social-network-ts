export type MessageType = {
    id: number
    message: string
    avatar: string
}
export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type PostType = {
    id: number
    name: string
    avatarUrl: string
    message: string
    liked: boolean
    likesCount: number
}
export type FriendsType = {
    id: number
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
    _subscriber: (state: RootStateType) => void
    _state: RootStateType
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
    setLiked: (postId: number, liked: boolean) => void
}

export let store: StoreType = {
    _subscriber(state: RootStateType) {
        console.log('state changed')
    },
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    name: "Johanna Fox",
                    avatarUrl: "https://artsland.ru/files/logos/21246bb6c07d46c71f9b3e51dd7bf1da.png",
                    message: "Hi! How are you?",
                    liked: true,
                    likesCount: 15
                },
                {
                    id: 2,
                    name: "Kate Winsley",
                    avatarUrl: "https://www.spletnik.ru/thumb/310x310/img/persons/Eva-Mendes-post.jpg",
                    message: "I've learned React.",
                    liked: true,
                    likesCount: 20
                },
                {
                    id: 3,
                    name: "Fiona Smith",
                    avatarUrl: "https://sun9-53.userapi.com/impf/c846523/v846523336/486aa/WAmlS7FDlqo.jpg?size=400x0&quality=90&crop=6,0,488,488&sign=18d5b99310a2fbe958b38251cab6b5db&c_uniq_tag=arHi9u4Wz5f8hjjNrw4bqf5GiIihueE46UdzBj4g3y0&ava=1",
                    message: "Happy Developer's Day!",
                    liked: true,
                    likesCount: 5
                },
                {
                    id: 4,
                    name: "Bob Mayers",
                    avatarUrl: "https://bmstu.ru/ps/media/avatars/kartashov/IMG_4688223453130%20(2).jpeg",
                    message: "Are we gonna have a class tomorrow?",
                    liked: false,
                    likesCount: 1
                },
                {
                    id: 5,
                    name: "Sandra Dalton",
                    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLTHcfkORUBugIE9Cw71xLu03aUrJIWsPMLg&usqp=CAU",
                    message: "What a wonderful day!:)",
                    liked: true,
                    likesCount: 7
                }],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [{
                id: 1,
                name: "Dimych",
                avatar: "https://yt3.ggpht.com/a/AATXAJxegcKj7lnz8MCMgcAz-gpSgPs5u5yMvynOEWiL=s48-c-k-c0xffffffff-no-rj-mo"
            },
                {
                    id: 2,
                    name: "Andrey",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHb_qIXEoQLbo7FrGuHeD4zDFCVq7nsk32qQ&usqp=CAU"
                },
                {
                    id: 3,
                    name: "Sveta",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDxk6W0tQbm8aSCLorlULdSU31H8hNh3-rIw&usqp=CAU"
                },
                {
                    id: 4,
                    name: "Sasha",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmsuba4xsEi84cCfgkW8OFGSFwNSQfbgn80Q&usqp=CAU"
                },
                {
                    id: 5,
                    name: "Victor",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTX0T2w5-4-fG8ZUmbzHXhKZYAW22hffc4faA&usqp=CAU"
                },
                {
                    id: 6,
                    name: "Valera",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnjOdeIgaYOFx1p9q_XwIUEYfaQsyBDTcC0g&usqp=CAU"
                }],
            messages: [{
                id: 1,
                message: "Hi",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDxk6W0tQbm8aSCLorlULdSU31H8hNh3-rIw&usqp=CAU"
            },
                {
                    id: 2,
                    message: "Yo",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDxk6W0tQbm8aSCLorlULdSU31H8hNh3-rIw&usqp=CAU"
                },
                {
                    id: 3,
                    message: "How is your IT-Kamasutra?",
                    avatar: "https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"
                },
                {
                    id: 4,
                    message: "Yo",
                    avatar: "https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"
                },
                {
                    id: 5,
                    message: "Yo",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDxk6W0tQbm8aSCLorlULdSU31H8hNh3-rIw&usqp=CAU"
                }],
            newMessageText: ""
        },
        navBar: {
            friends: [{
                id: 1,
                name: "Dimych",
                avatar: "https://yt3.ggpht.com/a/AATXAJxegcKj7lnz8MCMgcAz-gpSgPs5u5yMvynOEWiL=s48-c-k-c0xffffffff-no-rj-mo"
            },
                {
                    id: 2,
                    name: "Andrey",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHb_qIXEoQLbo7FrGuHeD4zDFCVq7nsk32qQ&usqp=CAU"
                },
                {
                    id: 3,
                    name: "Sveta",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDxk6W0tQbm8aSCLorlULdSU31H8hNh3-rIw&usqp=CAU"
                }]
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._subscriber = observer;
    },
    addPost() {
        let newPost = {
            id: 6,
            name: "Anna Farrel",
            avatarUrl: "https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg",
            message: this._state.profilePage.newPostText,
            liked: false,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._subscriber(this._state)
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._subscriber(this._state)
    },
    addMessage() {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText,
            avatar: "https://i.pinimg.com/originals/5f/4f/2b/5f4f2b6eb1e078bc99c043330879c143.jpg"
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ""
        this._subscriber(this._state)
    },
    updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this._subscriber(this._state)
    },
    setLiked(postId: number, liked: boolean) {
        let postToLikeOrUnlike = this._state.profilePage.posts.find(p => p.id === postId)
        if (postToLikeOrUnlike) {
            postToLikeOrUnlike.liked = !liked
            if (postToLikeOrUnlike.liked) {
                postToLikeOrUnlike.likesCount = postToLikeOrUnlike.likesCount + 1
            } else {
                postToLikeOrUnlike.likesCount = postToLikeOrUnlike.likesCount - 1
            }
        }
        this._subscriber(this._state)
    }
}

