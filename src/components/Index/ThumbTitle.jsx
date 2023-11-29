import React from 'react';
import { Card } from 'react-bootstrap';

const ThumbTitle = ({text}) => {
    return (
        <div 
            className='ThumbTitle d-flex justify-content-center mx-4 font-trirong'>
            <Card.Title 
                className='d-flex justify-content-center p-2 text-center fs-5'
                >
                    {text}
            </Card.Title>
        </div>
    );
}

export default ThumbTitle;
