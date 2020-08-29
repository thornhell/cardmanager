import React from 'react';
import Column from './components/Column';
import Card from './components/Card';
import './app.css'

function App() {
  return (
    <div className='app'>
      <Column><Card /></Column>
      <Column><Card /></Column>
      <Column><Card /></Column>
    </div>
  );
}

export default App;
