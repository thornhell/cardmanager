import React from 'react';
import Column from './components/Column';
import './app.css'
import {useAppState} from './context/AppContext'
import AddNewItem from './components/AddNewItem';

const App = () => {
    const {state, dispatch} = useAppState();
    return (
        <div className='app'>
            {state.lists.map((list, index) =>
                <Column
                    text={list.text}
                    key={list.id}
                    index={index}
                />
            )}
            <AddNewItem
                onAdd={text => dispatch({
                    type: "ADD_LIST",
                    payload: text
                })}
            />
        </div>
    );
}

export default App;
