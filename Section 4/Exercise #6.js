import React, { useState } from 'react';
import './styles.css';
export default function App() {
    const [price, setPrice] = useState(100);
    function priceChange() {
        setPrice('75');
    };
    return (
        <div>
            <p>${price}</p>
            <button onClick={handleClick}>Apply Discount</button>
        </div>
    );
}