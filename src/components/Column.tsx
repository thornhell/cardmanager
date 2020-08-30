import React, {useRef} from 'react';
import './column.css';
import {useAppState} from '../context/AppContext';
import Card from './Card';
import AddNewItem from './AddNewItem';
import {useItemDrag} from '../utils/useItemDrag';
import {useDrop} from 'react-dnd';
import {DragItem} from '../utils/dragItem';
import { isHidden } from '../utils/isHidden';
import { ColumnContainer } from '../styles';

interface ColumnProps {
    text: string;
    index: number;
    id: string;
}

const Column = ({text, index, id}: ColumnProps) => {
    const {state, dispatch} = useAppState();
    const ref = useRef<HTMLDivElement>(null);

    const {drag} = useItemDrag({type: "COLUMN", id, index, text});

    const [, drop] = useDrop({
        accept: "COLUMN",
        hover(item: DragItem) {
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) {
                return
            }
            dispatch({
                type: "MOVE_LIST", payload: {dragIndex, hoverIndex}
            })
            item.index = hoverIndex
        }
    })

    drag(drop(ref));

    return (
        <ColumnContainer
            className='column'
             ref={ref}
             isHidden={isHidden(state.draggedItem, "COLUMN", id)}
        >
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
        </ColumnContainer>
    );
};

export default Column;
