import React, {useRef} from 'react';
import './column.css';
import {useAppState} from '../context/AppContext';
import Card from './Card';
import AddNewItem from './AddNewItem';
import {useItemDrag} from '../utils/useItemDrag';

interface ColumnProps {
    text: string;
    index: number;
    id: string;
}

const Column = ({text, index, id}: ColumnProps) => {
    const {state, dispatch} = useAppState();
    const ref = useRef<HTMLDivElement>(null);

    const {drag} = useItemDrag({type: "COLUMN", id, index, text});

    drag(ref);

    return (
        <div className='column' ref={ref}>
            <h3>{text}</h3>
            {state.lists[index].tasks.map(task =>
                <Card
                    text={task.text}
                    key={task.id}
                />
            )}
            <AddNewItem
                onAdd={text => dispatch({
                    type: 'ADD_TASK',
                    payload: {text, id: id}
                })}/>
        </div>
    );
};

export default Column;
