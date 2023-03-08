import React from 'react'

function useSumTotal(cart) {
  //hook
  const [ sumaTotal, setSumaTotal ] = React.useState(0)

  //suma el total de la compra
  React.useEffect(() => {
    let price = []
    if (cart.length > 0) {
      cart.map(data => {
        price.push(data.price)
      })
    }
    let suma = price.reduce((acum, value) => acum + value, 0)
    setSumaTotal(suma)
  }, [ cart ])

  return sumaTotal
}

export { useSumTotal };