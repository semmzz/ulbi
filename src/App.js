import React, {useEffect, useState} from "react";
import './components/PostItem.module.css';
import './App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [visibleModal, setVisibleModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const posts = await PostService.getAll()
        setPosts(posts)
    })

    const createPost = newPost => {
        setPosts([...posts, newPost]);
        setVisibleModal(false);
    }

    const removePost = post => {
        setPosts(posts.filter(p => p.id !== post.id));
    }


    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="App">
            <div className="wrapper">
                <MyButton
                    style={{margin: '15px 0'}}
                    onClick={_ => setVisibleModal(true)}
                >Create Post</MyButton>
                <MyModal
                    visible={visibleModal}
                    setVisible={setVisibleModal}
                >
                    <PostForm
                        create={createPost}
                    />
                </MyModal>

                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                />
                {postError && <h1>An error has occurred: {postError}</h1>
                }
                {isPostsLoading
                    ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 25}}>
                        <Loader/>
                    </div>
                    : <PostList
                        posts={sortedAndSearchedPosts}
                        title={'List of posts:'}
                        remove={removePost}
                    />
                }

            </div>
        </div>


    );
}

export default App;
