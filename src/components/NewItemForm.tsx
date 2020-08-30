import React, {useState} from 'react';
import {useFocus} from '../utils/useFocus';
import {FormContainer, InputContainer, ButtonCreate} from '../styles';

interface NewItemFormProps {
    onAdd(text: string): void
}

const NewItemForm = ({onAdd}: NewItemFormProps) => {
    const [text, setText] = useState('')
    const inputRef = useFocus()

    return (
        <FormContainer>
            <InputContainer
                ref={inputRef}
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <ButtonCreate
                onClick={() => onAdd(text)}>
                Create
            </ButtonCreate>
        </FormContainer>
    )
}

export default NewItemForm;
