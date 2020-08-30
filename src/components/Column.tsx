import React, {useRef} from 'react';
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
    isPreview?: boolean;
}

const Column = ({text, index, id, isPreview}: ColumnProps) => {
    const {state, dispatch} = useAppState();
    const ref = useRef<HTMLDivElement>(null);

    const {drag} = useItemDrag({type: 'COLUMN', id, index, text});

    const [, drop] = useDrop({
        accept: ['COLUMN', 'CARD'],
        hover(item: DragItem) {
            if (item.type === 'COLUMN') {
                const dragIndex = item.index
                const hoverIndex = index

                if (dragIndex === hoverIndex) {
                    return
                }

                dispatch({type: 'MOVE_LIST', payload: {dragIndex, hoverIndex}})
                item.index = hoverIndex
            } else {
                const dragIndex = item.index
                const hoverIndex = 0
                const sourceColumn = item.columnId
                const targetColumn = id

                if (sourceColumn === targetColumn) {
                    return
                }

                dispatch({
                    type: 'MOVE_CARD',
                    payload: {dragIndex, hoverIndex, sourceColumn, targetColumn}
                })

                item.index = hoverIndex
                item.columnId = targetColumn
            }
        }
    })

    drag(drop(ref));

    return (
        <ColumnContainer
             ref={ref}
             isPreview={isPreview}
             isHidden={isHidden(isPreview, state.draggedItem, 'COLUMN', id)}
        >
            <h3>{text}</h3>
            {state.lists[index].tasks.map((task,i) =>
                <Card
                    id={task.id}
                    columnId={id}
                    text={task.text}
                    key={task.id}
                    index={i}
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
