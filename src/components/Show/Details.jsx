import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Details = ({data}) => {
    return (
        <div className='Details d-flex align-items-end float-end' >
            <Card>
                <Card.Body >
                    {data.iscomfortable ? "Comfy" : null}
                    {data.material}
                    {data.name}
                    {data.heat} Insulation
                    {data.cold} Cooling
                    {data.category}
                </Card.Body>
            </Card>

        </div>
    );
}

export default Details;
