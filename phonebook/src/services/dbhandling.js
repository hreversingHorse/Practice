import axios from'axios'
const BASE_URL = 'http://localhost:3001/persons'

const loadPersons = () => {
    return axios
        .get(BASE_URL)
        .then(response => response.data)
}

const addPerson = (newPerson) => {
    return axios
        .post(BASE_URL,newPerson)
        .then(response => response.data)
}

const deletePerson = (id) => {
    return axios
        .delete(BASE_URL + '/' + id)
        .then(response => response.data)
}

const changePersonNumber = (id, newPerson) => {
    return axios
        .put(BASE_URL + '/' + id,newPerson)
        .then(response => response.data)
}

export default {
    loadPersons,
    addPerson,
    deletePerson,
    changePersonNumber
}




