import React from 'react';

function Navbar({ cartCount }) {
    return (
        <nav>
            <h1>Shopping Cart</h1>
            <div>
                <span>🛒 : {cartCount} items</span>
            </div>
        </nav>
    );
}

export default Navbar;
