import React from 'react';
import'./newList.css';

interface NewListProps {
    onAdd(text: string): void
}

const NewList = (props: NewListProps) => {
    return (
        <div>
            <button className='newList'>+ add new list</button>
        </div>
    );
};

export default NewList;
