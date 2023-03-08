//Importaciones ------------------------
//React
import React from 'react'
import { useNavigate } from 'react-router-dom';

//Context
import { useDataCart } from '../context/AppContext';

//Components
import Pedido from '../components/Pedido';

//Css
import '../css/pedido.css'
import { useSumTotal } from '../hooks/useSumTotal';
//---------------------------------------------

function Checkout() {
  //instancias de hooks
  const navigate = useNavigate()
  const carrito = useDataCart()
  const sumTotal = useSumTotal(carrito.state.cart)

  //lleva a la siguiente ventana
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
            Precio Total: ${sumTotal}
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