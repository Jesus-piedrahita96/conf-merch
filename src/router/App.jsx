//importacion
//react
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "../pages/Home";
import Checkout from '../pages/Checkout'
import Information from '../pages/Information'
import Payment from '../pages/Payment'
import Success from '../pages/Success'
import NotFound from "../pages/NotFound";

//css
import '../css/app.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout/information" element={<Information />} />
          <Route path="/checkout/payment" element={<Payment />} />
          <Route path="/checkout/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App