import React from 'react'
import '../css/pedido.css'

function Pedido() {
  return (
    <>
      <div className="contain-pedido">
        <h3 className='contain-pedido__item'>
          pedido - name
        </h3>
        <div className="contain-pedido__info">
          <p> $10 </p>
          <span className='icon-delete'></span>
        </div>
      </div>
    </>
  );
}

export default Pedido;