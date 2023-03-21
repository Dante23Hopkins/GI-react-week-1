import React from 'react';
export default function App() {
    const [highlighted, setHighlighted] = React.useState(false);

    function clickHandler() {
        setHighlighted(isHighlighted => !isHighlighted);
    }

    return (
        <div>
            <p style={{ color: highlighted ? 'red' : 'white' }}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}