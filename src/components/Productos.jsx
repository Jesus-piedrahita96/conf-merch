import React from 'react'
import Producto from './Producto';
import initialState from '../initialState';
import '../css/productos.css'

function Productos() {
  const productos = initialState.products

  return (
    <>
      <div className="container-productos">
        {productos.map((data) => (
          <Producto key={data.id} producto={data}/>
        ))}
      </div>
    </>
  );
}

export default Productos;