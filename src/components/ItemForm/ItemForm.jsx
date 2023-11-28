import React from 'react';
import { useState, useEffect } from 'react';
import { Form, Container } from 'react-bootstrap';

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

    const [item, setItem] = useState(template)
    
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
    }

    return (
        <div className='ItemForm'>
            <Container 
                className='bg-primary'
            >
                bingbong
            </Container>
            <Form
                className=''>

            </Form>
        </div>
    );
}

export default ItemForm;
