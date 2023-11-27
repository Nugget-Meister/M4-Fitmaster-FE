import React from 'react';
import { Card, Button} from 'react-bootstrap';

const ItemThumb = ({clothing}) => {
    console.log(clothing)
    return (
       <Card style={{width: '10rem'}}>
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
