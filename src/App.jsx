
import { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import Cartlist from './Component/Cartlist'; 
import './App.css';


function App() {
  const [CartItem, setCartItem] = useState([]); // menyimpan data produk dan kuantitas
  const [cartCount, setCartCount] = useState(0); // menyimpan jumlah item di keranjang

  useEffect(() => {
    // Mengambil data produk dari API
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(data => {
        const productsWithQuantity = data.map(product => ({
          ...product,
          quantity: 1, // inisialisasi kuantitas awal 1
        }));
        setCartItem(productsWithQuantity);
      });
  }, []);

  const updateQuantity = (id, newQuantity) => {
    const updatedCart = CartItem.map(product =>
        product.id === id ? { ...product, quantity: newQuantity } : product
    );
    setCartItem(updatedCart);

    // Update jumlah item di keranjang
    const totalItems = updatedCart.reduce((acc, curr) => acc + curr.quantity, 0);
    setCartCount(totalItems);
};

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Cartlist cart={CartItem} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;
