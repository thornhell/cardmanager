import React from 'react';
import Column from './components/Column';
import './app.css';
import {useAppState} from './context/AppContext';
import AddNewItem from './components/AddNewItem';
import { CustomDragLayer } from './CustomDragLayer';

const App = () => {
    const {state, dispatch} = useAppState();
    return (
        <div className='app'>
            <CustomDragLayer />
            {state.lists.map((list, index) =>
                <Column
                    text={list.text}
                    id={list.id}
                    key={list.id}
                    index={index}
                />
            )}
            <AddNewItem
                onAdd={text => dispatch({
                    type: 'ADD_LIST',
                    payload: text
                })}
            />
        </div>
    );
}

export default App;
