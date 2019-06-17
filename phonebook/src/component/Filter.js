import React from 'react';

const Filter = ({filter, handleFilterChange}) => {
    return (
        <div>
            filter shown with <input
            value={filter}
            onChange={handleFilterChange}
        />
        </div>
    );
};

Filter.propTypes = {
    
};

export default Filter;