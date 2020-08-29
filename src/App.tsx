import React from 'react';
import Column from './components/Column';
import Card from './components/Card';
import './app.css'
import NewList from './components/NewList';

function App() {
    return (
        <div className='app'>
            <Column text='Ideas'><Card text='Card1'/></Column>
            <Column text='...in progress... '><Card text='Card2'/></Column>
            <Column text='Finished'><Card text='Card3'/></Column>
            <NewList/>
        </div>
    );
}

export default App;
