import React from 'react'
import { useDataCart } from '../context/AppContext';
import '../css/pedido.css'
import swal from 'sweetalert';

function Pedido() {
  const carrito = useDataCart()
  const handleRemove = (object) => {
    swal({
      icon: 'warning',
      text: 'Seguro quiere eliminar el pedido?',
      dangerMode: true,
      buttons: {
        cancel: {
          text:'Cancelar',
          value:false,
          visible: true
        },
        confirm: {
          text:'Eliminar',
          value: true,
          visible: true
        }
      }
    }).then(response => {
      if(response) {
        carrito.removeToCard(object)
      }
    })
  }

  return (
    <>
      <div className="contain-pedido">
        {carrito.state.cart.map((data, index) => (
          <div key={index} className="contain-pedido__unitario">
          <h3 className='contain-pedido__item'>
            {data.title}
          </h3>
          <div className="contain-pedido__info">
            <p> ${data.price} </p>
            <span
              className='icon-delete'
              onClick={() => handleRemove(data)}
            ></span>
          </div>
        </div>
        ))}
      </div>
    </>
  );
}

export default Pedido;