import React, {useState} from 'react';
import NewItemForm from './NewItemForm';

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
        <button
            className='btnAdd'
            onClick={() => setShowForm(true)}>
            + add new item
        </button>
    )
}

export default AddNewItem;
