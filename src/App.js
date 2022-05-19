import React, {useState} from "react";
import './components/PostItem.module.css';
import './App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

const languages = [
    {id: 1, title: 'Aa', body: 'aa'},
    {id: 3, title: 'AA', body: 'gg'},
    {id: 2, title: 'aa', body: 'cc'},
    {id: 4, title: 'aA', body: 'zz'},

]

// const languages2 = [
//     {id: 5, title: 'C', body: 'Description'},
//     {id: 6, title: 'C#', body: 'Description'},
//     {id: 7, title: 'Pascal', body: 'Description'},
//     {id: 8, title: 'GoLang', body: 'Description'},
// ]


function App() {

    const [posts, setPosts] = useState(languages);

    const createPost = newPost => {
        setPosts([...posts, newPost])
    }

    const removePost = post => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const [selectedSort, setSelectedSort] = useState('')

    const sortPost = (sort) => {
        setSelectedSort(sort)
        setPosts( [...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
    }

    return (
        <div className="App">
            <div className="wrapper">
                <MySelect
                    value={selectedSort}
                    onChange={sortPost}

                    defaultValue='Сортировать'
                    options={[
                        {value: 'title', name: "По названию"},
                        {value: 'body', name: "По описанию"},
                    ]}
                />


                {posts.length
                    ? <PostList
                        posts={posts}
                        title={'List of posts:'}
                        remove={removePost}
                    />
                    : <div style={{textAlign: "center", fontSize: '30px'}}>Posts weren't found</div>
                }


                <PostForm
                    create={createPost}
                />

            </div>
        </div>


    );
}

export default App;
