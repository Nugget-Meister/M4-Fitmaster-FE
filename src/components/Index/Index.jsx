import React from 'react';
import { getClothes, getSingleClothing } from '../../helpers/apicalls';
import { useState } from 'react';
const Index = () => {
    
    const [clothes, setClothes] = useState([])

    getClothes()
    // .then(res => console.log(res.data))
    .then()


    return (
        <div>
            
        </div>
    );
}

export default Index;
