import React from 'react';

const Details = (props) => {
    const { id, name } = props?.details || {};

    return (
        <div>
            <h1>details</h1>
            <h2>{id}</h2>
            <h2>{name}</h2>
        </div>
    );
};

export default Details;