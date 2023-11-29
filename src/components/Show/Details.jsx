import React, { useState } from 'react';
import { Container, Card, Row, Col, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Modal } from 'react-bootstrap';


const Details = ({data}) => {
    const navigate = useNavigate()

    const [show, setShow] = useState(false)

    const showModal = () => {
        console.log("bing")
        setShow(true)
    }
    const hideModal = () => {
        setShow(false)
    }
    
    return (
        <>
            <Modal show={show} onHide={hideModal}>
                <Modal.Header>
                    <Modal.Title>Delete {data.name}?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this, this action cannot be undone!</Modal.Body>
                <Modal.Footer>
                    <Button>Delete</Button>
                    <Button>Cancel</Button>
                </Modal.Footer>
            </Modal>
            
            <Container className='Details bg-ltwhite h-600 d-flex justify-content-end'>
                <div 
                    className='mx-4 mt-5 border-end border-2 border-black flex-fill'
                >
                    <div
                        className='border-bottom border-black border-2 p-3'
                    >
                        <Row>
                            <Col className='d-flex justify-content-end'>
                                {data.iscomfortable ? "Comfortable " : "Uncomfortable "}
                                {data.material}
                            </Col>
                        </Row>
                        <Row>
                            <Col className='d-flex justify-content-end'>
                                {data.name}
                            </Col>
                        </Row>
                    </div>
                    <div className='border-bottom border-black border-2 p-3'>
                        <Row>
                            <Col className='d-flex justify-content-end'>{data.heat} Insulation</Col>
                        </Row>
                        <Row>
                            <Col className='d-flex justify-content-end'>{data.cold} Cooling</Col>
                        </Row>
                        <Row>
                            <Col className='d-flex justify-content-end'>{data.category}</Col>
                        </Row>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Row className='d-flex my-4'>
                            <Col>
                                <Button
                                    className='d-flex ps-5 mx-2'
                                    onClick={()=> showModal()}
                                >
                                    Delete
                                </Button>
                            </Col>
                            <Col>
                                <Button 
                                    className='d-flex me-3'
                                    onClick={() => navigate(`/clothes/${id}/edit`)}
                                >
                                    Edit
                                </Button>
                            </Col>
                        </Row>
                    </div>   
                </div>
            </Container>
        </>
    );
}

export default Details;
