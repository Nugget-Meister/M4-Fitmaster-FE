import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router';
import { getSingleClothing } from '../../helpers/apicalls';

const Show = () => {
    const {id} = useParams()
    // console.log(id)

    return (
        <div className='Show'>
            <Row 
                className=''>
                
                <Container as={Col}>
                    sss
                </Container>
                <Container as={Col}>
                    sss
                </Container>
            </Row>
        </div>
    );
}

export default Show;
