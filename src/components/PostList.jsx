import React from 'react';
import PostItem from "./PostItem";
import './PostList.css'
import {CSSTransition, TransitionGroup} from "react-transition-group";


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


            <TransitionGroup>
                {posts.map((p, index) => (
                    <CSSTransition
                        key={posts.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem remove={remove} post={p} number={index + 1}/>
                    </CSSTransition>
                ))
                }
            </TransitionGroup>

        </div>
    )
}

export default PostList;