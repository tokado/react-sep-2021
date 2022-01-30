import {useEffect, useState} from "react";
import User from "../User/User";

const Users = () => {
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


    return (
        <div>

            {users.map(value=> <User key={value.id} user={value} getUserId={getUserID}/>)}
            <hr/>
            {user && <div>{user?.id}.{user?.name}__{user?.email}__{user?.username}__{user?.address.street}__{user?.address.suite}__{user?.address.city}__{user?.address.zipcode}__{user?.phone}__{user?.website}</div>}
            <hr/>
            {post && <div>Posts:{post?.id}.{post?.title}</div>}
        </div>
    );
};

export default Users;
