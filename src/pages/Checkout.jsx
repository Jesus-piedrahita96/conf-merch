import React from 'react'
import {useNavigate } from 'react-router-dom';
import Pedido from '../components/Pedido';
import { useDataCart } from '../context/AppContext';
import '../css/pedido.css'

function Checkout() {
  const [sumaTotal, setSumaTotal] = React.useState(0)
  const navigate = useNavigate()
  const carrito = useDataCart()

  const handleClick = () => {
    navigate('/checkout/information')
  }

  React.useEffect(() => {
    let price = []
    if(carrito.state.cart.length > 0) {
      carrito.state.cart.map(data => {
        price.push(data.price)
      })
    }
    let suma = price.reduce((acum, value) => acum + value, 0)
    setSumaTotal(suma)
  }, [carrito.state.cart])

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
            Precio Total: ${sumaTotal}
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