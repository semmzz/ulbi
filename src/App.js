import React, {useMemo, useState} from "react";
import './components/PostItem.module.css';
import './App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";

const languages2 = [
    {id: 1, title: 'Aa', body: 'aa'},
    {id: 3, title: 'AA', body: 'gg'},
    {id: 2, title: 'aa', body: 'cc'},
    {id: 4, title: 'aA', body: 'zz'},

]

const languages = [
    {id: 5, title: 'C', body: 'Description'},
    {id: 6, title: 'C#', body: 'Description'},
    {id: 7, title: 'Pascal', body: 'Description'},
    {id: 8, title: 'GoLang', body: 'Description'},
]


function App() {

    const [posts, setPosts] = useState(languages);

    const createPost = newPost => {
        setPosts([...posts, newPost])
    }

    const removePost = post => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const [filter, setFilter] = useState({sort: '', query: ''})


    const sortedPost = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [posts, filter.sort])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPost.filter(w => w.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPost])

    return (
        <div className="App">
            <div className="wrapper">
                <PostForm
                    create={createPost}
                />
                <hr style={{height:'5px', margin: '10px', }}/>

                <PostFilter
                    filter={filter}
                    setFilter={setFilter}
                />

                <PostList
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
