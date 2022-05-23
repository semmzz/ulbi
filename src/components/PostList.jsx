import React from 'react';
import PostItem from "./PostItem";


const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <div style={{textAlign: "center", fontSize: '30px'}}>Posts weren't found</div>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>

            {
                posts.map((p, index) => (
                    <PostItem
                        remove={remove}
                        post={p}
                        number={index + 1}
                        key={posts.id}
                    />
                ))}
        </div>
    )
}

export default PostList;