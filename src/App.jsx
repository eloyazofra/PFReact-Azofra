import Navbar from '../src/component/NavBar/index'
import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Navbar />
    </>
  )
}

export default App