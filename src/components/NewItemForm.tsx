import React, {useState} from 'react';
import {useFocus} from '../utils/useFocus';
import './newItem.css';

interface NewItemFormProps {
    onAdd(text: string): void
}

const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const [text, setText] = useState('')
    const inputRef = useFocus()

    return (
        <div className='container'>
            <input
                className='inputForm'
                ref={inputRef}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button
                className='btnCreate'
                onClick={() => onAdd(text)}>
                Create
            </button>
        </div>
    )
}

export default NewItemForm;
