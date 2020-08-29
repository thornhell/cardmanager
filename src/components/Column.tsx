import React from 'react';
import './column.css'

interface ColumnProps {
    text: string;
}

const Column = ({text, children}:React.PropsWithChildren<ColumnProps>) => {
    return (
        <div className='column'>
            <h3>{text}</h3>
            {children}
            + add new item
        </div>
    );
};

export default Column;
