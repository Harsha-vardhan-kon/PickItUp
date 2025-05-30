import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from './Components/Product/Product';
import LoginPage from './Components/LoginPage/LoginPage';
import SignUpPage from './Components/SignUpPage/SignUp';
import ForgetPage from './Components/ForgetPage/ForgetPage';
import Iphone15 from './Components/Iphone15/Iphone15';
import Cart from './Components/Cart/Cart';
import { CartProvider } from './Components/Cart/CartProvider';







const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path='/forgetPage' element={<ForgetPage/>}/>
          <Route path="/cart" element={<Cart />} />
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/iphone15' element={<Iphone15/>}/>
      <Route path="/CartProvider" element={<CartProvider />} />

    </Routes>
  );
};

export default App;
