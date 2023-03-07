import React from 'react'
import '../css/productos.css'

function Producto({producto, handleAddToCard}) {
  return (
    <>
      <div className="product-card">
        <div className="product-card__head">
          <h2>{producto.title}</h2>
          <p>${producto.price}</p>
        </div>
        <img
          className='product-card__imagen'
          src={producto.image}
          alt="imagenes"
        />
        <p className="product-card__description">
          {producto.description}
        </p>
        <button onClick={() => handleAddToCard(producto)}
        >Comprar</button>
      </div>
    </>
  );
}

export default Producto;