import { useState } from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
//components
import Home from "./components/home";
import About from './components/about';
import Locations from './components/locations';
import Pricing from './components/pricing';
import Contact from './components/contact';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Navbar2 from './components/navbar2';
import Login from './components/loginwtanimation';
import Signup from './components/signup';
//other links
import FAQs from './components/faqs';
import Reviews from './components/reviews';

export default function App () {
  
  return (
    <>
      {/**outer div (flexbox layout) for better page layout on components */}
       <div className="d-flex flex-column min-vh-100">
         <Navbar2 />
            <main className="flex-grow-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/locations" element={<Locations />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/reviews" element={<Reviews />} />
              </Routes>
            </main>
          <Footer />

       </div>
    </>
  );
}


