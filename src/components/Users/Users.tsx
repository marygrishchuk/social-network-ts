import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import {v1} from "uuid";

type PropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

export const Users = (props: PropsType) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: v1(),
                    photoURL: "https://static.thenounproject.com/png/233095-200.png",
                    followed: false,
                    fullName: "Dmitry K.",
                    status: "I can teach you React & Redux.",
                    location: {
                        city: "Minsk",
                        country: "Belarus"
                    }
                },
                {
                    id: v1(),
                    photoURL: "https://static.thenounproject.com/png/233095-200.png",
                    followed: true,
                    fullName: "Sasha D.",
                    status: "Looking for a kind person to adopt a kitten.",
                    location: {
                        city: "Moscow",
                        country: "Russia"
                    }
                },
                {
                    id: v1(),
                    photoURL: "https://static.thenounproject.com/png/233095-200.png",
                    followed: false,
                    fullName: "Andrew S.",
                    status: "Happy Friday Everyone!",
                    location: {
                        city: "Kiev",
                        country: "Ukraine"
                    }
                },
                {
                    id: v1(),
                    photoURL: "https://static.thenounproject.com/png/233095-200.png",
                    followed: false,
                    fullName: "Tanya T.",
                    status: "Looking for a job right now.",
                    location: {
                        city: "Brest",
                        country: "Belarus"
                    }
                },
                {
                    id: v1(),
                    photoURL: "https://static.thenounproject.com/png/233095-200.png",
                    followed: true,
                    fullName: "Nikolay W.",
                    status: "Let's make friends!",
                    location: {
                        city: "Paris",
                        country: "France"
                    }
                }
            ]
        )
    }

    return <div>
        {props.users.map(u => <div key={u.id}>

            <div className={s.spanBlock}>
                <div className={s.divBlock + " " + s.photoBtnBlock}>
                    <div>
                        <img src={u.photoURL} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>
                        }

                    </div>
                </div>
                <div className={s.spanBlock + " " + s.textInfoBlock}>
                    <div className={s.divBlock + " " + s.nameStatusBlock}>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={s.divBlock + " " + s.cityCountryBlock}>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </div>
                </div>
            </div>
        </div>)}
    </div>
}