import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';
import { getSingleClothing } from '../../helpers/apicalls';
import Details from './Details';
import { Modal, Button} from 'react-bootstrap';

const Show = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const [clothing, setClothing] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [startAnim, setStartAnim] = useState(false)
    const [isError, setIsError] = useState(false)



    
    const [showModal, setShowModal] = useState(false)

    const failedModal = (
        <Modal show={showModal} onHide={()=> {setShowModal(false);}}>
            <Modal.Header>
                <Modal.Title>Failed!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Unable to load information. Please try again later. If the issue persists, contact the repo maintainer. </Modal.Body>
            <Modal.Footer>
                @Nugget-Meister
                <Button
                    className='mx-2'
                    onClick={() => navigate(`/`)}
                >
                    Return
                </Button>
            </Modal.Footer>
        </Modal>
    )

    
    useEffect(() => {
        setTimeout(()=> {
            getSingleClothing(id)
            .then(res => {
                if(res.data.id) {
                    setClothing({...res.data})
                    setStartAnim(true)
                    setTimeout(()=> {
                        setIsLoading(false)
                    }, "1000")
                } else {
                    setShowModal(true)
                }
            })
            .catch(err => {
                console.error(err)
                setIsError(true)
            })
        }, "1000")
    })
    return (
        <div className='Show'>
            {isLoading ? (<h1 className={`text-center animate__animated animate__bounceIn ${startAnim ? 'animate__bounceOut' : ''}`}>Loading...</h1>): null}
            {failedModal}
            <Row 
                className=''>
                <Col>
                    <Container className='text-center ThumbTitle p-2 bg-gray'>
                        <div className='p-2 font-tillana'>{clothing.imageurl}</div>
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
