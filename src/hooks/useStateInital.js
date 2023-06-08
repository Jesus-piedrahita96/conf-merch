import React from 'react'
import initialState from '../initialState';

function useStateInitial() {
  //hook
  const [state, setState] = React.useState(initialState)

  //Agregar articulos al cart
  const addToCard = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }

  //agregar usuarios al buyer
  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  //agregar a las ordenes
  const addToOrder = ( payload) => {
    setState({
      ...state,
      order: [...state.order, payload]
    })
  }

  //Remover articulos del cart
  const removeToCard = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(data => data.id !== payload.id)
    })
  }

  return {addToCard, removeToCard, addToBuyer, addToOrder, state}
}

export { useStateInitial };