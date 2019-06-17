import React from 'react';
import PropTypes from 'prop-types';

const Persons = ({generateNumbers}) => {
    return (
        <div>
            <ul>
                {generateNumbers()}
            </ul>
        </div>
    );
};

export default Persons;