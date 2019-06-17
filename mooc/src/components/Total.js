import React from 'react';

const Total = ({parts}) =>{
    let sum = 0

    parts.forEach(element => {
        sum+=element.exercises
    });
    
    return (
        <p>Number of exercises {sum}</p>
    )
}

export default Total;