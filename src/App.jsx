import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/component/NavBar/index'
import Footer from './component/Footer/index'
import Body from './component/Body/index.jsx'
import ItemDetail from './component/ItemDetail';
import { useState } from 'react';
import Contact from './component/Contact/index.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/madera" element={<Body />} />
        <Route path="/grabados" element={<Body />} />
        <Route path="/muebles" element={<Body />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App