import React, {useEffect, useState} from 'react';

const Spases = () => {
    const [spases,setSpases] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flights =>
                setSpases(flights.filter(flight => flight.launch_year !== 2020)))
    }, [])

    return (
        <div>
            {spases.map(value=> <div key={value.flight_number}> - {value.mission_name} - {value.launch_year}
                <img src={value.links.mission_patch_small}/></div>)}
        </div>
    );
};

export default Spases;