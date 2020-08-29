import React from 'react';
import './column.css'

const Column = ({children}:React.PropsWithChildren<any>) => {
    return (
        <div className='column'>
            {children}
        </div>
    );
};

export default Column;
