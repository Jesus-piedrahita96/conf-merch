import React from 'react'
import initialState from '../initialState';

function useStateInitial() {
  const [state, setState] = React.useState(initialState)

  const addToCard = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }

  const removeToCard = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(data => data.id !== payload.id)
    })
  }

  return {addToCard, removeToCard, state}
}

export { useStateInitial };