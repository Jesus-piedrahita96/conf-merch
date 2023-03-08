//Importaciones ----------------------------------------
//React
import React from 'react'
import { useNavigate } from 'react-router-dom'

//Dependencia de alertas
import swal from 'sweetalert'

//Css
import '../css/information.css'

//Components
import Pedido from '../components/Pedido'

//Context
import { useDataCart } from '../context/AppContext'

//---------------------------------------------------------

function Information() {
  //instancias de hooks
  const form = React.useRef(null)
  const navigate = useNavigate()
  const comprador = useDataCart()

  //aceptar datos del formulario
  const handleClick = (event) => {
    event.preventDefault()
    const dataForm = new FormData(form.current)
    const datos = {
      name: dataForm.get('name'),
      email: dataForm.get('email'),
      address: dataForm.get('address'),
      apto: dataForm.get('apto'),
      city: dataForm.get('city'),
      country: dataForm.get('country'),
      state: dataForm.get('state'),
      code: dataForm.get('code'),
      phone: dataForm.get('phone')
    }
    comprador.addToBuyer(datos)
    swal({
      icon: 'success',
      text: 'Datos enviados',
      buttons: false,
      timer: 1800
    })
    setTimeout(() => {
      navigate('/checkout/payment')
    }, 2000);
  }

  //regresar a checkout
  const handleBack = (event) => {
    event.preventDefault()
    navigate('/checkout')
  }
  return (
    <>
      <h1>Informacion de contacto:</h1>
      <div className="contain-information">
        <section className="contain-information__main">
          <form
            className='contain-information__main-form'
            method='post'
            ref={form}
          >
            <input type="text" name="name" placeholder='Nombre' required/>
            <input type="email" name="email" placeholder='Correo' required />
            <input type="text" name="address" placeholder='Direccion' required />
            <input type="text" name='apto' placeholder='Apto' required />
            <input type="text" name="city" placeholder='Ciudad' required />
            <input type="text" name="country" placeholder='Pais' required />
            <input type="text" name="state" placeholder='Estado' />
            <input type="number" name="code" placeholder='Codigo postal' required />
            <input type="number" name="phone" placeholder='Telefono' required />
            <div className="contain-information__main-form__button">
              <button onClick={handleBack}>Regresar</button>
              <button
                type='button'
                onClick={handleClick}
              >Aceptar</button>
            </div>
          </form>
        </section>
        <section className="contain-information__pedido">
          <Pedido />
        </section>
      </div>
    </>
  );
}

export default Information;