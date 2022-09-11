import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/shop/ItemDetailContainer';
import ProductsContainer from './components/ProductsContainer';
import Navbar from './components/Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/shop' element={<ProductsContainer/>}/>
      <Route path='/shop/item/:slug' element={<ItemDetailContainer />} />
      <Route path='/shop/category/:category' element={<ItemDetailContainer/>}/>
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
