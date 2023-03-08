//Importacoines ----------------------------
//React
import React from 'react'
// import { useNavigate } from 'react-router-dom';

//Paypal
import { PayPalButton } from 'react-paypal-button-v2';

//Components
import Pedido from '../components/Pedido';

//Context
import { useDataCart } from '../context/AppContext';

//Hooks
import { useSumTotal } from '../hooks/useSumTotal';

//Css
import '../css/payment.css'
//-----------------------------------------

function Payment() {

  //instancias de hooks
  const comprador = useDataCart()
  const { cart, buyer } = comprador.state
  const sumTotal = useSumTotal(cart)
  // const navigate = useNavigate()

  //objetos
  const paypalOptions =  {
    clientId: "AYrsUwpTHNy5raeskG--Glsx_l_tN8z5xL0Tei0J3OEzY6rYA84WiyyjxvD5Fovcl6CtE-eJpiofQI0k",
    intent: 'capture',
    currency: 'USD'
  }

  //estilos para la pantalla emergente de paypal
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSucces = (data) => {
    console.log(data);
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }

      comprador.addToOrder(newOrder)
    }
    // navigate('/checkout/success')

  }

  return (
    <>
      <h1>Payment</h1>
      <main className='payment-main'>
        <section>
          <Pedido className='payment-main__pedido' />
        </section>
        <section>
          <p className='payment-main__total'>Total Pagar: <strong>${sumTotal}</strong></p>
          <section className='payment-main__button'>
            <PayPalButton
              paypalOptions={paypalOptions}
              buttonStyles={buttonStyles}
              amount={sumTotal}
              onPaymentStart={() => console.log('Start payment')}
              onSuccess={(data) => handlePaymentSucces(data)}
              onError={(error) => console.log(error)}
              onCancel={(response) => console.log(response)}
            />
          </section>
        </section>
      </main>
    </>
  );
}

export default Payment;