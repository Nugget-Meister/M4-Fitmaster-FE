import React from 'react';
import { Card, Button} from 'react-bootstrap';

const ItemThumb = ({clothing}) => {
    console.log(clothing)
    return (
       <Card >
            <Card.Title>{clothing.name}</Card.Title>
            <Card.Img 
                variant='top' 
                src={clothing.imageurl}
                style={{
                    width: '10rem', 
                    height: '20rem',
                    overflow: 'hidden'
                }}
                />
            <Card.Body>
                <Button variant="warning">{clothing.heat}</Button>
                <Button>{clothing.cold}</Button>
            </Card.Body>

       </Card>
    );
}

export default ItemThumb;
