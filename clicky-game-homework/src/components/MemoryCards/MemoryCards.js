import React from 'react'; 
import "./MemoryCards.css"; 

const MemoryCards = (props) => (
    <div 
        className="allCards"
        key={props.id}
        onClick={() => props.handleClick(props.id, props.clicked)}
    >
        <img 
            id={props.name}
            src={props.image}
            alt={props.name}
        />
    </div>
); 

export default MemoryCards; 