import React from 'react';
import { Card, Button, Container} from 'react-bootstrap';
import ThumbTitle from './thumbTitle';

const ItemThumb = ({clothing}) => {
    console.log(clothing)
    return (
        <div className='ItemThumb p-3'>
            <ThumbTitle text={clothing.name}/>
            <Card 
                // className='ItemThumb'
                >
                <Container
                    className='h-12rem overflow-y-hidden p-3'
                    >
                    <Card.Img 
                        variant='top' 
                        src={clothing.imageurl}
                        className='overflow-y-hidden'
                        />
                </Container>
                <Card.Body className='d-flex justify-content-between align-items-end'>
                    <Button variant="warning">{clothing.heat}</Button>
                    <Button>{clothing.cold}</Button>
                </Card.Body>

            </Card>
        </div>
    );
}

export default ItemThumb;
