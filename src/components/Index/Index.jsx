import React from 'react';
import { getClothes, getSingleClothing } from '../../helpers/apicalls';
import { useState, useEffect } from 'react';

import { Col, Row, Container} from 'react-bootstrap';

import ItemThumb from './ItemThumb';
import Reccomend from './Reccomend';

const Index = () => {
    
    const [clothes, setClothes] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [startAnim, setStartAnim]= useState(false)
    useEffect(() => {
        getClothes()
        .then(res =>{
            setClothes(res.data)
            setStartAnim(true)
            setTimeout(()=> {
                setLoading(false)
            },"1000")
        })
        .catch(err => console.error(err))
        console.log(isLoading)
    }, [])

    




    return (
        <div className='z-2 position-relative'>
            {isLoading ? (<h1 className={`text-center animate__animated animate__bounceIn ${startAnim ? 'animate__bounceOut' : ''}`}>Loading...</h1>): null}
            <div className='d-flex only-mobile'>
                <Reccomend clothes={clothes}/>
            </div>
            <Row className='d-flex justify-content-center only-desktop'>
                <Reccomend clothes={clothes}/>
            </Row>
            <Row 
                className='d-flex justify-content-center m-5'
            >
                {clothes.map((clothing) => {
                    return <ItemThumb clothing={clothing}/>
                    }
                )}
            </Row>
            
            
        </div>
    );
}

export default Index;
