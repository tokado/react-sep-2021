import {useEffect, useState} from "react";
import Phone from './Phone'

const Phones = () => {
    const [phones,setPhones] = useState([])
    const [phone,setPhone] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setPhones(value))
    }, [])

    const getPhoneID = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => setPhone(value))
    }


    return (
        <div>

            {phones.map(value=> <Phone key={value.id} phone={value} getPhoneId={getPhoneID}/>)}
            <hr/>
            {phone && <div>{phone?.id}.{phone?.name}__{phone?.phone}</div>}
            <hr/>
        </div>
    );
};

export default Phones;
