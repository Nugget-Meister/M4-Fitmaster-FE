import React from 'react';
import { Card, Button, Container} from 'react-bootstrap';
import ThumbTitle from './ThumbTitle.jsx';
import { useNavigate } from 'react-router';

const ItemThumb = ({clothing}) => {
    // console.log(clothing)
    const navigate = useNavigate()
    return (
        <div 
            key={clothing.id}
            className='ItemThumb p-3 my-2 shadow-s'
            onClick={() => navigate(`/clothes/${clothing.id}`)}
            >
            <ThumbTitle text={clothing.name}/>
            <Card 
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
                <Card.Body 
                    className='d-flex justify-content-between align-items-end'
                    >
                        <span
                            className='mobile-font fc-deep-red rounded bg-danger-red font-timmana fs-3  my-1 pt-2 px-3' 
                        >
                            {clothing.heat}
                        </span>
                    <span
                        className='mobile-font fc-artic-blue rounded bg-icy-blue font-timmana fs-3 my-1 pt-2 px-3'
                    >
                        {clothing.cold}
                    </span>
                </Card.Body>

            </Card>
        </div>
    );
}

export default ItemThumb;
