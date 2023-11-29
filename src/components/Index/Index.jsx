import React from 'react';
import { getClothes, getSingleClothing } from '../../helpers/apicalls';
import { useState, useEffect } from 'react';

import { Col, Row, Container} from 'react-bootstrap';

import ItemThumb from './ItemThumb';
import Reccomend from './Reccomend';

const Index = () => {
    
    const [clothes, setClothes] = useState([])

    useEffect(() => {
        getClothes()
        // .then(res => console.log(res.data))
        .then(res => setClothes(res.data))
        .catch(err => console.error(err))
    }, [])


    return (
        <div className='z-2 position-relative'>
            <div className='only-mobile'>
                <Reccomend clothes={clothes}/>
            </div>
            <Row 
                className='d-flex justify-content-center m-5'
            >
                {clothes.map((clothing) => {
                    return <ItemThumb clothing={clothing}/>
                    }
                )}
            </Row>
            <Row className='d-flex justify-content-center only-desktop'>
                <Reccomend clothes={clothes}/>
            </Row>
            
        </div>
    );
}

export default Index;
