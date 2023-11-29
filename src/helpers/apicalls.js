const URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_LOCAL

const getClothes = () => {

    return fetch(URL)
    .then(res => res.json())
    .catch(err => console.error(error)) 
} 
const getSingleClothing = (id) => {
    return fetch(`${URL}/${id}`)
    .then(res => res.json())
    .catch(err => console.error(error))
    
}
const createClothing = (input) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(input),
        headers: {'Content-Type': "application/json" }
    };

    return fetch(`${URL}/clothes`, options)
    .then(res => res.json())
    .catch(err => console.error(err))
}
const updateClothing = (input) => {
    const options = {
        method: 'PUT',
        body: JSON.stringify(input),
        headers: {'Content-Type': "application/json" }
    };

    return fetch(`${URL}/${input.id}`, options)
    .then(res => res.json())
    .catch(err => console.error(err))
}


const deleteClothing = (id) => {
    const options = {
        method: 'DELETE',
    };

    return fetch(`${URL}/${id}`, options)
}

export {
    getClothes,
    getSingleClothing,
    createClothing,
    updateClothing,
    deleteClothing
}