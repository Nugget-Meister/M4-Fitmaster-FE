import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Container, Image, Col, Row, Button} from 'react-bootstrap';
import fakeImage from '../../assets/huy-nguyen-YhP-E5YwOGE-unsplash.jpg'


const ItemForm = ({id}) => {
    const template = {
        name: '',
        category: '',
        heat: 0,
        cold: 0,
        material: '',
        iscomfortable: false,
        imageurl: ''
    }

    const [item, setItem] = useState({...template})
    
    if(id) {
        console.log(id);
        useEffect(() => {
            console.log(id)
        }, [])
    }
    
    const handleTrueFalse = (e) => {}
    const handleChange = (e) => {}
    const handleSubmit = (e) => {
        e.preventDetault()
        console.log(item)
    }
    const handleReset = () => {
        setItem = { ...template}
    }

    return (
        <div className='ItemForm'>
            <Row>
                <Col>
                    <Container className='bg-primary'>
                        <Image src={fakeImage} rounded fluid/>
                    </Container>
                </Col>
                <Col>
                    <Form className=''>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label className='d-flex'> 
                                    Name 
                                    <Form.Check/>
                                </Form.Label>
                                
                                <Form.Control 
                                    id=''
                                    value={''}
                                    onChange={handleChange}
                                    placeholder='Bingbong'
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label className=''> '' </Form.Label>
                                <Form.Control 
                                    id=''
                                    value={''}
                                    onChange={handleChange}
                                    placeholder='Bingbong'
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label className=''> '' </Form.Label>
                                <Form.Control 
                                    id=''
                                    value={''}
                                    onChange={handleChange}
                                    placeholder='Bingbong'
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label className=''> '' </Form.Label>
                                <Form.Control 
                                    id=''
                                    value={''}
                                    onChange={handleChange}
                                    placeholder='Bingbong'
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label className=''> '' </Form.Label>
                                <Form.Control 
                                    id=''
                                    value={''}
                                    onChange={handleChange}
                                    placeholder='Bingbong'
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row>                  
                            <Form.Group as={Col}>
                                <Form.Label className='d-flex'> 
                                    Name 
                                </Form.Label>
                                
                                <Form.Control 
                                    id=''
                                    value={''}
                                    onChange={handleChange}
                                    placeholder='Bingbong'
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row
                            className='d-flex justify-content-end align-items-end py-3'
                        >
                            <Button
                                className='d-flex w-25 justify-content-end'
                                type='reset'  
                                onClick={handleReset}  
                            >Reset
                            </Button>
                            <Button
                                className='d-flex w-25 justify-content-end'
                                type="submit"
                            >Submit</Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default ItemForm;
