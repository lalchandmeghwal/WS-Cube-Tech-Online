import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<MainLayout/>} >
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cart/:id' element={<ProductDetails />} />

        </Route>

      </Routes>

    </div>
  );
}

export default App
