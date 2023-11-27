import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap';

const ItemThumb = (clothing) => {
    return (
       <Card>
            <Card.Title>{clothing.name}</Card.Title>
            <Card.Img variant='top' src={clothing.imageurl}/>
            <Card.Body>
                <Button>{clothing.heat}</Button>
                <Button>{clothing.cold}</Button>
            </Card.Body>

       </Card>
    );
}

export default ItemThumb;
