import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./frontend/pages/Home/Home";
import ProductListing from "./frontend/pages/ProductListing/ProductListing";
import Navbar from './frontend/components/Navbar/Navbar';
import Mockman from 'mockman-js';

function MockAPI() {
  return (
    <div className='MockAPI'>
      <Mockman />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductListing />} />
        <Route path='/mockman' element={<MockAPI />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
