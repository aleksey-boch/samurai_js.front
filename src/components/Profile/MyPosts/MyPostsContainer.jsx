import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     posts={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
    />)
}

export default MyPostsContainer;