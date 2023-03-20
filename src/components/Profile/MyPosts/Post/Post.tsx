import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://i.ytimg.com/vi/Y5GLCBjHR8U/maxresdefault.jpg'></img>
            <div>
                {props.message}
            </div>
            <div>
                <div>
                    
                </div>
                <span> like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;
