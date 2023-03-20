import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0){
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg',
                    follow: false, fullName: 'Dmitry', status: 'Im boss', location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg',
                    follow: true, fullName: 'Sasha', status: 'Im boss too', location: {city: 'Kiyv', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'https://www.vokrug.tv/pic/person/e/b/f/1/ebf14965f14a2a2bf01dbc0e34d5f3b6.jpg',
                    follow: false,
                    fullName: 'Andrew',
                    status: 'Im small boss',
                    location: {city: 'moskow', country: 'Parasha'}
                },
            ],
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=>{props.unfollow(u.id)}}> UnFollow</button>
                            : <button onClick={()=>{props.follow(u.id)}}> Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>

                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;
