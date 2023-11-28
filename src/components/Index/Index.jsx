import React from 'react';
import { getClothes, getSingleClothing } from '../../helpers/apicalls';
import { useState, useEffect } from 'react';

import { Col, Row} from 'react-bootstrap';

import ItemThumb from './ItemThumb';

const Index = () => {
    
    const [clothes, setClothes] = useState([])

    useEffect(() => {
        getClothes()
        // .then(res => console.log(res.data))
        .then(res => setClothes(res.data))
        .catch(err => console.error(err))
    }, [])


    return (
        <div>
            <Row>
                {clothes.map((clothing) => {
                    return <ItemThumb clothing={clothing}/>
                    }
                )}
            </Row>
            
        </div>
    );
}

export default Index;
