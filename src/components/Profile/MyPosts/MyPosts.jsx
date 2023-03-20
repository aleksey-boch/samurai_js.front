import React from 'react';

import Post from './Post/Post';
import s from './MyPosts.module.css';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/state";


const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    const addPost = () => {
        // props.addPost();
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        props.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;