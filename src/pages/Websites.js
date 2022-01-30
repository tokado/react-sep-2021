import {useEffect, useState} from "react";
import Website from './Website'

const Websites = () => {
    const [websites,setWebsites] = useState([])
    const [website,setWebsite] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setWebsites(value))
    }, [])

    const getWebsiteID = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => setWebsite(value))
    }


    return (
        <div>

            {websites.map(value=> <Website key={value.id} website={value} getWebsiteId={getWebsiteID}/>)}
            <hr/>
            {website && <div>{website?.id}.{website?.name}__{website?.website}</div>}
            <hr/>
        </div>
    );
};

export default Websites;
