import React from 'react';
import Part from './Part'

const Content = ({parts}) =>{
    const makeParts = () => parts.map(part => 
        <Part part={part}/>)
    
    return (
        <div>
            {makeParts()}
        </div>
    )
}


export default Content;