import React from 'react'
import {useNavigate } from 'react-router-dom';
import Pedido from '../components/Pedido';
import '../css/pedido.css'

function Checkout() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/checkout/information')
  }
  return (
    <>
      <h1>Checkout</h1>
      <div className="contain-main">
        <div className="contain-main__pedidos">
          <h2 className="contain-main__title">
            Lista de pedidos:
          </h2>
          <Pedido />
        </div>
        <div className="contain-main__resumen">
          <h2 className="contain-main__resumen-title">
            Precio Total: $10
          </h2>
          <button
            type='button'
            onClick={handleClick}
          >Continuar pedido</button>
        </div>

      </div>
    </>
  );
}

export default Checkout;