import React from 'react';
import CartItem from './CartItem';

function Cartlist({ cart, updateQuantity }) {
  return (
    <div className="cartlist">
    {cart.map(product => (
        <CartItem
            key={product.id}
            product={product}
            updateQuantity={updateQuantity}
        />
    ))}
</div>

  );
}

export default Cartlist;
// cart