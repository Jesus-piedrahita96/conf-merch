import React from 'react'
import Producto from './Producto';
import '../css/productos.css'
import { useDataCart } from '../context/AppContext';

function Productos() {
  const datos = useDataCart()

  return (
    <>
      <div className="container-productos">
        {datos.state.products.map((data) => (
          <Producto
            key={data.id}
            producto={data}
            handleAddToCard={datos.addToCard}
          />
        ))}
      </div>
    </>
  );
}

export default Productos;