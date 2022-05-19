import React from 'react';
import classes from "./PostItem.module.css"
import MyButton from "./UI/button/MyButton";

const PostItem = ({post, number, remove}) => {

    return (
        <div className={classes.post}>
            <div className={classes.post__content}>
                <div>
                    <strong>{number}. {post.title}</strong>
                    <div>
                        {post.title} - {post.body}
                    </div>
                </div>
                <div className={classes.post__btns}>
                    <MyButton onClick={
                        () => remove(post)
                    }>Удалить</MyButton>
                </div>
            </div>
        </div>

    );
};

export default PostItem;