import {useEffect, useState} from "react";
import UserPosts from "./UsersPosts";

const UserPost = () => {
    const [users,setUsers] = useState([])

    const [user,setUser] = useState(null)
    const [post,setPost] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])

    const getUserID = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => setUser(value))
    }
    const getPostID = (id) => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.json())
            .then(value => setPost(value))
    }


    return (
        <div>

            {users.map(value=> <UserPosts key={value.id} user={value} getUserId={getUserID} getPostId={getPostID}/>)}
            <hr/>
            {user && <div>{user?.id}.{user?.name}__{user?.email}__{user?.username}__{user?.address.street}__{user?.address.suite}__{user?.address.city}__{user?.address.zipcode}__{user?.phone}__{user?.website}</div>}
            <hr/>
            {post && <div>Posts:{post?.id}.{post?.title}</div>}
        </div>
    );
};

export default UserPost;
