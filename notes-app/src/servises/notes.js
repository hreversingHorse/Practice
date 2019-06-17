import axios from 'axios'
const BASE_URL = 'http://localhost:3001/notes'

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

// export default {
//     getAll: getAll,
//     create: create,
//     update: update
// }
// Becouse the exported variable names are exactly the same as the function names
// we can simplyfy it

export default {getAll,create,update}
