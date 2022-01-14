import React from 'react';

const Simpsons = ({simpson:{name,surname,age,info,photo}}) => {
    return (
        <div className={'item'}>
            <p>{name}</p>
            <p>{surname}</p>
            <p>{age}</p>
            <p>{info}</p>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default Simpsons;