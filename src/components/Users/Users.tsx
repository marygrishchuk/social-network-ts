import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user-photo.png"
import {UserType} from "../../redux/users-reducer";
import MouseEvent from 'react'

type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

class Users extends React.Component<PropsType> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios
                .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }  //'if' condition is needed to avoid duplication of users loaded again
    // after we switch to another page with Route & return to this page
    // which will lead to the reconstruction of the object (class instance)

    onPageChanged = (pageNumber: number) => { //arrow syntax is needed to save the call context
        this.props.setCurrentPage(pageNumber)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                <button className={s.pageNumber} onClick={() => {
                    if (this.props.currentPage >= 2) {
                        this.onPageChanged(this.props.currentPage - 1)
                    }
                }}>&#60;</button>
                {pages.map(p => {
                        if (p <= 5 || p === 10 || p === 50 || p === 100 || p === 150 || p === 200 || p === 250
                        || p === 300 || p === 350 || p === 400 || p === 450 || p === 500 || p === 550 || p === 600
                        || p === 650 || p === 700 || p === 750) {
                            return <span className={this.props.currentPage === p ? s.selected : s.pageNumber}
                                         onClick={() => this.onPageChanged(p)}> {p} </span>
                        }
                    }
                )}
                <span className={this.props.currentPage === pagesCount ? s.selected : s.pageNumber}
                      onClick={() => {this.onPageChanged(pagesCount)}}>{pagesCount} </span>
                <button className={s.pageNumber} onClick={() => {
                          if (this.props.currentPage < this.props.totalUsersCount) {
                              this.onPageChanged(this.props.currentPage + 1)
                          }
                      }}>&#62;</button>
                <span className={s.selected}>  {this.props.currentPage}</span>
            </div>
            {this.props.users.map((u: any) => <div key={u.id}>

                <div className={s.spanBlock}>
                    <div className={s.divBlock + " " + s.photoBtnBlock}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
}

export default Users