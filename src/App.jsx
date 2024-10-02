import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/component/NavBar/index';
import Footer from './component/Footer/index';
import Body from './component/Body/index.jsx';
import ItemDetail from './component/ItemDetail';
import Contact from './component/Contact/index.jsx';
import CartPage from './component/Cart/index.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [cart, setCart] = useState([]); 


  const addToCart = (item) => {
    const itemInCart = cart.find(cartItem => cartItem.id === item.id);
    if (itemInCart) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <Navbar totalQuantity={totalQuantity} /> 
      <Routes>
        <Route path="/" element={<Body />} />
        <Route
          path="/item/:id"
          element={<ItemDetail addToCart={addToCart} />}  
        />
        <Route path="/madera" element={<Body />} />
        <Route path="/grabados" element={<Body />} />
        <Route path="/muebles" element={<Body />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Cart"
          element={<CartPage cart={cart} setCart={setCart} />}  
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
