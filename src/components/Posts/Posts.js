import {useEffect, useState} from "react";
import React from 'react';
import Post from "../Post/Post";

const Posts = () => {

    const [posts,setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])

    return (
        <div>
             {posts.map(value=> <Post title={value.title}/>)}
        </div>
    );
};

export default Posts;