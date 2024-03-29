import React, { useState } from 'react';
import { Container, Card, Row, Col, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Modal } from 'react-bootstrap';
import { deleteClothing } from '../../helpers/apicalls';


const Details = ({data}) => {
    const navigate = useNavigate()

   
    
    // Modal Stuff
    const [show, setShow] = useState(false)
    const [showSucceed, setShowSucceed] = useState(false)
    // modal object states
    
    const [toggleModal, setToggleModal] = useState({
        delete: false,
        succeed: false
    })



    const showModal = (key) => {
        console.log("bing", key, toggleModal[key])
        console.log(toggleModal)
        setToggleModal({
            ...toggleModal,
            [key]: true
        })
    }
    const hideModal = (key) => {
        // console.log(key)
        setToggleModal({
            ...toggleModal,
            [key]: false
        })
    }
    
    const handleDelete = (id) => {
        // console.log(id)
        deleteClothing(id)
        .then(res => {
            // console.log(res)
            if(res.data.id) {
                showModal('succeed')
            }
        })
        .catch(err => {
            console.error(err)
        })
    }


    
    const deleteModal = (
        <Modal show={toggleModal.delete} onHide={() => hideModal('delete')}>
            <Modal.Header>
                <Modal.Title>Delete {data.name}?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this, this action cannot be undone!</Modal.Body>
            <Modal.Footer>
                <Button 
                    onClick={() => handleDelete(data.id)}
                >
                    Delete
                </Button>
                <Button
                    onClick={() => hideModal('delete')}
                >
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
        )
    
    const succeedModal = (
        <Modal show={toggleModal.succeed} onHide={()=> navigate('/')}>
            <Modal.Header>
                <Modal.Title>It's gone</Modal.Title>
            </Modal.Header>
            <Modal.Body>Successfully deleted {data.name}. Returning to home page.</Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={() => navigate('/')}
                >
                    Return
                </Button>
            </Modal.Footer>
        </Modal>
    )

        

    return (
        <>
            {deleteModal}
            {succeedModal}
            <Container className='Details bg-ltwhite h-600 d-flex justify-content-end font'>
                <div 
                    className='mx-4 mt-5 border-end border-2 border-black flex-fill'
                >
                    <div
                        className='border-bottom border-black border-2 p-3'
                    >
                        <Row>
                            <Col className='d-flex justify-content-end font-trirong fs-4'>
                                {data.iscomfortable ? (
                                    <span className='px-3 bg-good-green rounded-pill mx-2'>
                                        {`Comfortable`}
                                    </span> ): 
                                    <span className='px-3 bg-danger-red rounded-pill mx-2'>
                                        {`Uncomfortable`}
                                    </span>
                                    }
                                {data.material}
                            </Col>
                        </Row>
                        <Row>
                            <Col className='d-flex justify-content-end font-trirong fs-1'>
                                {data.name}
                            </Col>
                        </Row>
                    </div>
                    <div className='border-bottom border-black border-2 p-3 font-timmana fs-3'>
                        <Row>
                            <Col className='d-flex justify-content-end fc-deep-red'>{data.heat} Insulation</Col>
                        </Row>
                        <Row>
                            <Col className='d-flex justify-content-end fc-artic-blue'>{data.cold} Cooling</Col>
                        </Row>
                        <Row>
                            <Col className='d-flex justify-content-end'>{data.category}</Col>
                        </Row>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Row className='d-flex my-4'>
                            <Col>
                                <Button
                                    className='d-flex ps-5 mx-2 button-custom bg-danger-red font-shadows-into-light fs-4'
                                    onClick={() => showModal('delete')}
                                >
                                    Delete
                                </Button>
                            </Col>
                            <Col>
                                <Button 
                                    className='d-flex me-3 button-custom bg-warning-yellow font-shadows-into-light fs-4'
                                    onClick={() => navigate(`/clothes/${data.id}/edit`)}
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
