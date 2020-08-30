import React, {useState} from 'react';
import NewItemForm from './NewItemForm';
import { ButtonAdd } from '../styles';

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
        <ButtonAdd
            onClick={() => setShowForm(true)}>
            + add new item
        </ButtonAdd>
    )
}

export default AddNewItem;
