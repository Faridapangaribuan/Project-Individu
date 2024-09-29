import React from 'react';
import Counter from './counter';

function CartItem({ product, updateQuantity }) {
  const { title, price, image, quantity } = product;
  
  const totalPrice = price * quantity;

  return (
    <div className="cart-item">
        <img src={image} alt={title} />
        <div>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
            <div className="counter">
                <Counter
                    quantity={quantity}
                    updateQuantity={(newQuantity) => updateQuantity(product.id, newQuantity)}
                />
            </div>
        </div>
    </div>
);

}

export default CartItem;
