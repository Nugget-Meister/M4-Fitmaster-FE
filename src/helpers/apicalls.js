const URL = import.meta.env.VITE_API_URL || import.meta.env.VITE_API_LOCAL

const getClothes = () => {
    fetch(URL)
    .then(res => res.json())
    .then(json => json.data)
    .catch(err => console.error(error)) 
} 
const getSingleClothing = () => {}
const createClothing = () => {}
const updateClothing = () => {}
const deleteClothing = () => {}

module.export = {
    getClothes,
    getSingleClothing,
    createClothing,
    updateClothing,
    deleteClothing
}