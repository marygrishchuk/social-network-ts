import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user-photo.png"
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: Array<boolean | string>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onPageChanged: (currentPage: number) => void
    isFetching: boolean
    isAuth: boolean
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
            {pages.map((p, i) => {
                    if (p <= 5 || p === 10 || p === 50 || p === 100 || p === 150 || p === 200 || p === 250
                        || p === 300 || p === 350 || p === 400 || p === 450 || p === 500 || p === 550 || p === 600
                        || p === 650 || p === 700 || p === 750) {
                        return <span key={i} className={props.currentPage === p ? s.selected : s.pageNumber}
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
        {props.isFetching
            ? <Preloader/>
            : <> {props.users.map((u: any) => <div key={u.id}>

                <div className={s.spanBlock}>
                    <div className={s.divBlock + " " + s.photoBtnBlock}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={s.userPhoto} alt={'userPhoto'}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollow(u.id)
                                          }}>Unfollow</button>
                                : <>
                                    {props.isAuth
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      props.follow(u.id)
                                                  }}>Follow</button>
                                        : <button><NavLink to="/login">Follow</NavLink></button>
                                    }
                                </>
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
            </div>)
            }
            </>
        }
    </div>
}

export default Users