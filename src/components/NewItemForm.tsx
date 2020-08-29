import React, {useState} from 'react';
import {useFocus} from '../utils/useFocus'

interface NewItemFormProps {
    onAdd(text: string): void
}

const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const [text, setText] = useState("")
    const inputRef = useFocus()

    return (
        <div>
            <input
                ref={inputRef}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => onAdd(text)}>Create
                Create
            </button>
        </div>
    )
}

export default NewItemForm;
