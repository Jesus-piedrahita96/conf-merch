import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/information.css'
import Pedido from '../components/Pedido'
import swal from 'sweetalert'

function Information() {
  const form = React.useRef(null)
  const navigate = useNavigate()

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
    swal({
      icon: 'success',
      text: 'Datos enviados',
      buttons: false,
      timer: 1800
    })
    console.log(datos);
    setTimeout(() => {
      navigate('/checkout/payment')
    }, 2000);
  }

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
            <input type="text" name="name" placeholder='Nombre' />
            <input type="email" name="email" placeholder='Correo' />
            <input type="text" name="address" placeholder='Direccion' />
            <input type="text" name='apto' placeholder='Apto' />
            <input type="text" name="city" placeholder='Ciudad' />
            <input type="text" name="country" placeholder='Pais' />
            <input type="text" name="state" placeholder='Estado' />
            <input type="number" name="code" placeholder='Codigo postal' />
            <input type="number" name="phone" placeholder='Telefono' />
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