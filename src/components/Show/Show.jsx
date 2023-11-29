import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import { getSingleClothing } from '../../helpers/apicalls';
import Details from './Details';

const Show = () => {
    const {id} = useParams()

    const [clothing, setClothing] = useState({})

    useEffect(() => {
        getSingleClothing(id)
        .then(res => {
            if(res.data.id) {
                setClothing({...res.data})
            }
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <div className='Show'>
            <Row 
                className=''>
                <Col>
                    <Container className='text-center ThumbTitle p-2 bg-gray'>
                        <div className='p-2'>{clothing.imageurl}</div>
                    </Container>
                    <Container as={Col}
                        className='hm-600 d-flex justify-content-center overflow-hidden bg-shelf-gray'
                    >
                        <Image 
                            className='h-600 img-mobile' 
                            src={clothing.imageurl || null} rounded fluid/>
                    </Container>
                </Col>
                <Col
                    className='d-flex align-items-center justify-content-end'
                >
                     <Details data={clothing}/>
                </Col>

            </Row>
        </div>
    );
}

export default Show;
