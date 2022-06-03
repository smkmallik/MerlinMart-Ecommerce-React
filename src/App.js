import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./frontend/pages/Home/Home";
import ProductListing from "./frontend/pages/ProductListing/ProductListing";
import Navbar from './frontend/components/Navbar/Navbar';
import Mockman from 'mockman-js';
import {Login} from './frontend/components/Authentication/Login/Login';
import {Signup} from './frontend/components/Authentication/Signup/Signup';
import { ResetPassword } from './frontend/components/Authentication/ResetPassword/ResetPassword';
import { SignIn } from './frontend/pages/SignIn/SignIn';
import { Wishlist } from './frontend/pages/Wishlist/Wishlist';
import { Cart } from './frontend/pages/Cart/Cart';

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
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/reset' element={<ResetPassword />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
