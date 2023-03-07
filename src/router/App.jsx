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

//components
import Header from "../components/Header";

//context
import { ProviderContext } from "../context/AppContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProviderContext>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/information" element={<Information />} />
            <Route path="/checkout/payment" element={<Payment />} />
            <Route path="/checkout/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProviderContext>
      </BrowserRouter>
    </>
  )
}

export default App