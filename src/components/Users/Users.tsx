import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user-photo.png"
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onPageChanged: (currentPage: number) => void
}

const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            <button className={s.pageNumber} onClick={() => {
                if (props.currentPage >= 2) {
                    props.onPageChanged(props.currentPage - 1)
                }
            }}>&#60;</button>
            {pages.map(p => {
                    if (p <= 5 || p === 10 || p === 50 || p === 100 || p === 150 || p === 200 || p === 250
                        || p === 300 || p === 350 || p === 400 || p === 450 || p === 500 || p === 550 || p === 600
                        || p === 650 || p === 700 || p === 750) {
                        return <span className={props.currentPage === p ? s.selected : s.pageNumber}
                                     onClick={() => props.onPageChanged(p)}> {p} </span>
                    }
                }
            )}
            <span className={props.currentPage === pagesCount ? s.selected : s.pageNumber}
                  onClick={() => {
                      props.onPageChanged(pagesCount)
                  }}>{pagesCount} </span>
            <button className={s.pageNumber} onClick={() => {
                if (props.currentPage < props.totalUsersCount) {
                    props.onPageChanged(props.currentPage + 1)
                }
            }}>&#62;</button>
            <span className={s.selected}>  {props.currentPage}</span>
        </div>
        {props.users.map((u: any) => <div key={u.id}>

            <div className={s.spanBlock}>
                <div className={s.divBlock + " " + s.photoBtnBlock}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                followAPI.unfollow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    })
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                followAPI.follow(u.id).then(data => {
                                        if (data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                            }}>Follow</button>
                        }

                    </div>
                </div>
                <div className={s.spanBlock + " " + s.textInfoBlock}>
                    <div className={s.divBlock + " " + s.nameStatusBlock}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={s.divBlock + " " + s.cityCountryBlock}>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </div>
                </div>
            </div>
        </div>)}
    </div>
}

export default Users