import React from 'react'; 
export default function App() { 
    const [isActive, setIsActive] = React.useState(false); 

    function toggleClass() { 
        setIsActive(!isActive); 
    };

    return (
        <div>
            <p className={isActive ? 'active' : ''}>Style me!</p> 
            <button onClick={toggleClass}>Toggle style</button> 
        </div>
    );
}