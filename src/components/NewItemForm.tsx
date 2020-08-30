import React, {useState} from 'react';
import {useFocus} from '../utils/useFocus'
import './newItemForm.css'
import './newList.css'

interface NewItemFormProps {
    onAdd(text: string): void
}

const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const [text, setText] = useState("")
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
                className='btn'
                onClick={() => onAdd(text)}>
                Create
            </button>
        </div>
    )
}

export default NewItemForm;
