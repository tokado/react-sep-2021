import {useEffect, useState} from "react";
import Username from './Username'

const UserNames = () => {
    const [userNames,setUserNames] = useState([])
    const [userName,setUserName] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUserNames(value))
    }, [])

    const getUserNameID = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => setUserName(value))
    }


    return (
        <div>

            {userNames.map(value=> <Username key={value.id} userName={value} getUserNameId={getUserNameID}/>)}
            <hr/>
            {userName && <div>{userName?.id}.{userName?.name}__{userName?.phone}</div>}
            <hr/>
        </div>
    );
};

export default UserNames;
