import React from 'react';
import './card.css';

interface CardProps {
    text: string;
}

const Card = ({text}:CardProps) => {
    return (
        <div className='card'>
            {text}
        </div>
    );
};

export default Card;
