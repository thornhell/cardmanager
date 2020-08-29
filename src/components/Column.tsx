import React from 'react';
import './column.css'
import {useAppState} from '../context/AppContext';
import Card from './Card';

interface ColumnProps {
    text: string;
    index: number;
}

const Column = ({text, index}: ColumnProps) => {
    const {state} = useAppState();
    return (
        <div className='column'>
            <h3>{text}</h3>
            {state.lists[index].tasks.map(task =>
                <Card text={task.text} key={task.id}/>
            )}
            + add new item
        </div>
    );
};

export default Column;
