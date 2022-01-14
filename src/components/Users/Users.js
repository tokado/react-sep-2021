
import {useEffect, useState} from "react";
import User from "../User/User";
import Post from "../Post/Post";
import Comment from "../Comment/Comment";

const Users = () => {
    const [users,setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])

    const [posts,setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])

    const [comments,setComments] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    }, [])

    return (
        <div>
            {users.map(value=> <User key={value.id} name={value.name}/>)}
            {posts.map(value=> <Post title={value.title}/>)}
            {comments.map(value=> <Comment body={value.body}/>)}
        </div>
    );
};

export default Users;
