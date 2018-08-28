import React from 'react';

const person = (props) => {
    return (
        <p>
            <b>First Name: </b>{props.firstName}&nbsp;
            <b>Last Name: </b>{props.lastName}&nbsp;
            <b>Age: </b>{props.age}&nbsp;
        </p>
    );
}

export default person;