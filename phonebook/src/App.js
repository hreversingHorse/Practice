import React, {useState, useEffect} from 'react';
import PersonForm from './component/PersonForm';
import Filter from './component/Filter';
import Persons from './component/Persons';
import axios from 'axios';
import dbService from './services/dbhandling'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')

  const getPersons = () => {
      dbService.loadPersons().then(persons => {
        setPersons(persons)
      })
    }

  useEffect(getPersons, [])

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: number
    }
    let checkForDup = checkArray(newPerson)

    if (checkForDup === true) {
      const result = window.confirm(
        newName + ' is already in the phonebook. Do You want to replace his current number ?'
      )
      if (result === true){
        const personToChange = persons.find(person => person.name === newName)
        dbService.changePersonNumber(personToChange.id, newPerson).then(response => {
          getPersons()
        })
      }
    } else {
      dbService.addPerson(newPerson).then(addedPerson => {
        setPersons(persons.concat(addedPerson))
      })
    }
  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleDeletePerson = (id, name) => {
    const result = window.confirm('are you sure to delete ' + id + " " + name)
    console.log(result)
    if (!result){
      //do nothing
    }else {
      dbService.deletePerson(id)
      setPersons(persons.filter(person => {
        if (person.name === name){
          return false
        }else {
          return true
        }
      }))
    }
  }

  const generateNumbers = () => {
    return (
      persons.filter((person) => {
        if (person.name.toString().toLowerCase().includes(filter.toString().toLowerCase()) === true){
          return true
        } else {
          return false
        }
      }).map(person => <li key={person.id}>{person.name}, {person.number} <button onClick={() => handleDeletePerson(person.id, person.name)}>delete</button></li>)
    )
  }


  const checkArray = (entry) => {
    let flag = false;
    persons.forEach((person) => {
      if (person.name === entry.name){
        flag = true
      }
    })
    return flag
  }

  return (
    <div>
      <h2>PhoneBook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <PersonForm 
      addPerson={addPerson} 
      newName={newName} 
      handleNameChange={handleNameChange}
      number={number}
      handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons generateNumbers={generateNumbers}/>
    </div>
  );
};

export default App;