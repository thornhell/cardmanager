import React, {useState} from 'react';
import NewItemForm from './NewItemForm';
import './newList.css';

interface AddNewItemProps {
    onAdd(text: string): void;
}

const AddNewItem = (props: AddNewItemProps) => {
    const [showForm, setShowForm] = useState(false);
    const {onAdd} = props;
    if (showForm) {
        return (
            <NewItemForm
                onAdd={text => {
                    onAdd(text)
                    setShowForm(false)
                }}
            />
        )
    }
    return (
        <button className='newList' onClick={() => setShowForm(true)}>
            + add new list
        </button>
    )
}

export default AddNewItem;
