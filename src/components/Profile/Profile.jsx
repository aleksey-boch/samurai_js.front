import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';


let posts = [
    { id: 1, message: 'Hi', likesCount: 0 },
    { id: 2, message: 'It\'s my first post 2', likesCount: 10 },
    { id: 3, message: 'It\'s my first post 3', likesCount: 14 },
    { id: 4, message: 'It\'s my first post 4', likesCount: 15 },
]

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>

        </div>
    )
}


export default Profile;