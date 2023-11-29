import React from 'react';
import ItemForm from './ItemForm';
import { useParams } from 'react-router';

const EditItem = () => {
    const {id} = useParams()
    return (
        <div className='EditItem'>
            <ItemForm id={id}/>
        </div>
    );
}

export default EditItem;
