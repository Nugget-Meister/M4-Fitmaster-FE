const URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_LOCAL

const getClothes = () => {

    return fetch(URL)
    .then(res => res.json())
    // .catch(err => console.error(error)) 
} 
const getSingleClothing = () => {}
const createClothing = () => {}
const updateClothing = () => {}
const deleteClothing = () => {}

export {
    getClothes,
    getSingleClothing,
    createClothing,
    updateClothing,
    deleteClothing
}