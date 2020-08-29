import React from 'react';
import Column from './components/Column';
import './app.css'
import NewList from './components/NewList';
import {useAppState} from './context/AppContext'

const App = () => {
    const {state} = useAppState();
    return (
        <div className='app'>
            {state.lists.map((list, index) =>
                <Column text={list.text} key={list.id} index={index}/>
            )}
            <NewList/>
        </div>
    );
}

export default App;
