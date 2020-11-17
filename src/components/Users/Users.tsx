import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user-photo.png"
import {UserType} from "../../redux/users-reducer";

type PropsType = {
    users: Array<UserType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
}

class Users extends React.Component<PropsType> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => this.props.setUsers(response.data.items))
        }
    }  //'if' condition is needed to avoid duplication of users loaded again
    // after we switch to another page with Route & return to this page
    // which will lead to the reconstruction of the object (class instance)

    render() {
        return <div>
            {/*<button onClick={this.getUsers}>Get Users</button>*/}
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