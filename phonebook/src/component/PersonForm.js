import React from 'react';


const PersonForm = ({addPerson, newName, handleNameChange, 
    number, handleNumberChange}) => {

    return (
    <div>
        <form onSubmit={addPerson}>
            <div>
            name: <input
            value={newName}
            onChange={handleNameChange}
            />
            </div>
            <div>
            number: <input
            value={number}
            onChange={handleNumberChange}
            />
            </div>
            <div>
            <button type='submit'>add</button>
            </div>
        </form>
    </div>
    );
};

PersonForm.propTypes = {
    
};

export default PersonForm;