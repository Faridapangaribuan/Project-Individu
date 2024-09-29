import React from 'react';
import { useState } from 'react';

function Counter({ quantity, updateQuantity }) {
    const [count, setCount] = useState(quantity); // Menggunakan props sebagai nilai awal

    const increment = () => {
        setCount(prevCount => {
            const newCount = prevCount + 1;
            updateQuantity(newCount); // Memperbarui kuantitas di keranjang
            return newCount;
        });
    };

    const decrement = () => {
        if (count > 0) {
            setCount(prevCount => {
                const newCount = prevCount - 1;
                updateQuantity(newCount); // Memperbarui kuantitas di keranjang
                return newCount;
            });
        }
    };

    return (
        <div className="counter">
            <button onClick={decrement}>-</button>
            <span className="quantity">{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;
