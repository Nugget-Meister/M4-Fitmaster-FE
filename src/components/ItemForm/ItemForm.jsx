import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Container, Image, Col, Row, Button} from 'react-bootstrap';
import fakeImage from '../../assets/huy-nguyen-YhP-E5YwOGE-unsplash.jpg'
import { getSingleClothing } from '../../helpers/apicalls';


const ItemForm = ({id}) => {
    let template = {
        name: '',
        category: '',
        heat: 0,
        cold: 0,
        material: '',
        iscomfortable: false,
        imageurl: ''
    }

    const [item, setItem] = useState({...template})
    
    useEffect(() => {
        if(id) {
            console.log(id);
            getSingleClothing(id)
            .then(res => {
                if(res.data.id){
                    console.log(res.data)
                    return res.data
                }
            })
            .then(data => {
                setItem({...data})
                template = data
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
                                <Row>
                                    <Col>
                                        <Form.Label className=''> 
                                            Name 
                                        </Form.Label>
                                    </Col>
                                    <Col className='d-flex'>
                                        <Form.Label className='px-4'>
                                            Comfy?
                                        </Form.Label>
                                        <Form.Check
                                            className='checkbox-big d-flex'
                                            id='iscomfortable'
                                            checked={item.iscomfortable}
                                            onClick={handleTrueFalse}
                                        />
                                    </Col>
                                    
                                </Row>
                                <Form.Control 
                                    id='name'
                                    value={item.name}
                                    onChange={handleChange}
                                    placeholder='What is the name of your clothing?'
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
