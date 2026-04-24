import { useState } from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import About from './components/about';
import Locations from './components/locations';
import Pricing from './components/pricing';
import Navbar from './components/navbar';
import Navbar2 from './components/navbar2';
import Login from './components/login';

export default function App () {
  //const [count, setCount] = useState(0)

  return (
    <>
        <Navbar2 />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </>
  );
}


