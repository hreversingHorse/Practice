import axios from 'axios'
const BASE_URL = '/api/notes'

const getAll = () => {
    return axios
        .get(BASE_URL)
        .then(response => response.data)
}

const create = newObject => {
    return axios
        .post(BASE_URL,newObject)
        .then(response => response.data)
}

const update = (id, newObject) => {
    return axios
        .put(BASE_URL+'/'+id, newObject)
        .then(response => response.data)
}

export default {getAll,create,update}
