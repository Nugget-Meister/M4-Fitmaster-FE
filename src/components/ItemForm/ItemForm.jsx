import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Container, Image, Col, Row, Button} from 'react-bootstrap';
import { createClothing, getSingleClothing, updateClothing } from '../../helpers/apicalls';
import {FloatingLabel} from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Modal } from 'react-bootstrap';


const ItemForm = ({id}) => {
    let template = {
        name: '',
        category: 'Face',
        heat: 0,
        cold: 0,
        material: 'Canvas',
        iscomfortable: false,
        imageurl: ''
    }

    const [item, setItem] = useState({...template})
    
    const navigate = useNavigate()


    const [ showModal, setShowModal] = useState({
       success: false,
       failed: false,
    })

    const toggleModal = (key, value) => {
        setShowModal({
            ...showModal,
            [key]: value
        })
    }



    const successModal = (
        <Modal show={showModal.success} onHide={()=> navigate('/')}>
            <Modal.Header>
                <Modal.Title>Created/Updated {item.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Received confirmation with an id of {item.id}</Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={() => navigate(`/clothes/${item.id}`)}
                >
                    Continue
                </Button>
            </Modal.Footer>
        </Modal>
    )

    const failedModal = (
        <Modal show={showModal.failed} onHide={()=> {toggleModal('failed',false)}}>
            <Modal.Header>
                <Modal.Title>Failed!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Unable to create an article with that data. Please try again later. If the issue persists, contact the repo maintainer. </Modal.Body>
            <Modal.Footer>
                @Nugget-Meister
                <Button
                    className='mx-2'
                    onClick={() => navigate(`/`)}
                >
                    Return
                </Button>
                <Button
                    onClick={()=> {
                        toggleModal('failed', false);
                    }}
                >
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )



    useEffect(() => {
        if(id) {
            // console.log(id);
            getSingleClothing(id)
            .then(res => {
                if(res.data.id){
                    // console.log(res.data)
                    return res.data
                }
            })
            .then(data => {
                setItem({...data})
            })
        }
    }, [id])
    
    const handleTrueFalse = (e) => {
        // console.log(item[e.target.id])
        setItem({
            ...item,
            [e.target.id]: !item[e.target.id]
        })
    }
    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(item.id) {
            updateClothing(item)
            .then(res => {
                if(res.data.id) {
                    setItem({...res.data})
                    toggleModal('success', true);
                } else {
                    toggleModal('failed', true);
                }
            })
            .catch(err => {
                console.error(err);
                toggleModal('failed', true);
            })
        } else {
            createClothing(item)
            .then(res => {
                if(res.data.id) {
                    setItem({...res.data})
                    toggleModal('success', true);
                } else {
                    toggleModal('failed', true);
                }
            })
            .catch(err => {
                console.error(err);
                toggleModal('failed', true);
            })
        }
        }

    const handleReset = () => {
        setItem({ ...template})
    }

    return (
        <>
            {successModal}
            {failedModal}
            <div className='ItemForm'>
                <Row className='d-flex align-items-center row-mobile'>
                    <Col >
                        <Container 
                            className='text-center w-50 ThumbTitle p-2'
                        >
                            {item.name}
                        </Container>
                        <Container 
                            className='hm-600 d-flex align-items-start justify-content-center overflow-hidden bg-shelf-brown flex-fill'>
                            <Image 
                                className='h-600 img-mobile'
                                src={item.imageurl} rounded fluid />
                        </Container>
                    </Col>
                    <Col
                        // className='mx-2'
                    >
                        <Form 
                            className=' bg-shelf-brown-dark p-4'
                            onSubmit={handleSubmit}>
                            <Row>
                                <Form.Group as={Col}>
                                    <Row>
                                        <Col>
                                            <Form.Label className='font-timmana fs-4'> 
                                                Name 
                                            </Form.Label>
                                        </Col>
                                        <Col className='d-flex'>
                                            <Form.Label className='font-timmana fs-4 pe-4'>
                                                Comfy?
                                            </Form.Label>
                                            <Form.Check
                                                className='checkbox-big d-flex'
                                                id='iscomfortable'
                                                checked={item.iscomfortable}
                                                onChange={handleTrueFalse}
                                            />
                                        </Col>
                                        
                                    </Row>
                                    <Form.Control 
                                        className='text-center font-tillana fs-5'
                                        id='name'
                                        value={item.name}
                                        onChange={handleChange}
                                        placeholder='What is the name of your clothing?'
                                        required
                                    />
                                </Form.Group>
                            </Row>
                            <Row className='py-3'>
                                <Form.Group as={Col}>
                                    <Form.Label className='font-timmana fs-4'>Insulation</Form.Label>
                                    <FloatingLabel label="Protection from cold in degrees">
                                        <Form.Control 
                                            className='text-center font-tillana fs-5'
                                            id='heat'
                                            type='number'
                                            value={item.heat}
                                            onChange={handleChange}
                                            placeholder='Number'
                                            required
                                            />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group as={Col} className=''>
                                    <Form.Label className='font-timmana fs-4'>Cooling</Form.Label>
                                    <FloatingLabel label='Protection from the heat in degrees'>
                                        <Form.Control
                                            className='text-center font-tillana fs-5' 
                                            id='cold'
                                            value={item.cold}
                                            type='number'
                                            onChange={handleChange}
                                            placeholder='Number'
                                            required
                                            />
                                    </FloatingLabel>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col}>
                                    <Form.Label className='font-timmana fs-4'>Category</Form.Label>
                                    <Form.Select
                                        className='text-center font-tillana fs-5'
                                        id='category'
                                        value={item.category}
                                        onChange={handleChange}
                                        placeholder=''
                                        required
                                    >
                                        <option value="Face">Face</option>
                                        <option value="Neck">Neck</option>
                                        <option value="Torso">Torso</option>
                                        <option value="Arms">Arms</option>
                                        <option value="Hands">Hands</option>
                                        <option value="Legs">Legs</option>
                                        <option value="Feet">Feet</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label className='font-timmana fs-4'>Material</Form.Label>
                                    <Form.Select 
                                        id='material'
                                        className='text-center font-tillana fs-5'
                                        value={item.material}
                                        onChange={handleChange}
                                        placeholder='Bingbong'
                                        required
                                    >
                                        <option value="Canvas">Canvas</option>
                                        <option value="Cotton">Cotton</option>
                                        <option value="Denim">Denim</option>
                                        <option value="Hemp">Hemp</option>
                                        <option value="Leather">Leather</option>
                                        <option value="Linen">Linen</option>
                                        <option value="Lycra">Lycra</option>
                                        <option value="Polyester">Polyester</option>
                                        <option value="Silk">Silk</option>
                                        <option value="Velvet">Velvet</option>
                                        <option value="Wool">Wool</option>
                                    </Form.Select>
                                </Form.Group>
                            </Row>
                            <Row className='pt-3'>                  
                                <Form.Group as={Col}>
                                    <Form.Label className='d-flex font-timmana fs-4'> 
                                        Image Source 
                                    </Form.Label>
                                    <Form.Control 
                                        id='imageurl'
                                        className='text-center font-tillana fs-6'
                                        value={item.imageurl}
                                        onChange={handleChange}
                                        placeholder=''
                                        required
                                    />
                                </Form.Group>
                            </Row>
                            <Row
                                className='d-flex justify-content-end align-items-end py-3 px-3'
                            >
                                <Button
                                    className='d-flex w-25 mx-3 justify-content-end bg-warning-yellow font-shadows-into-light fs-4 button-custom'
                                    type='reset'  
                                    onClick={handleReset}  
                                >Clear
                                </Button>
                                <Button
                                    className='d-flex w-25 justify-content-end bg-danger-red font-shadows-into-light fs-4 button-custom'
                                    type="submit"
                                >Submit</Button>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default ItemForm;
