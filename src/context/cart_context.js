import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const getLocalStorage = () => {
  let cart = localStorage.getItem('winkelwagen')
  if(cart) {
  return JSON.parse(localStorage.getItem('winkelwagen'))
  } else {
    return []
  }
}

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 675

}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

// toevoegen aan winkelwagen
const addToCart = (id, color, amount, product) => {
  dispatch({type: ADD_TO_CART, payload: {id,color, amount, product}})

}

//verwijder uit winkelwagen
const removeItem = (id) => {
  dispatch({type:REMOVE_CART_ITEM, payload: id})
}
//verander aantal items
const toggleAmount = (id, value) => {
  console.log(id, value)
  dispatch({type:TOGGLE_CART_ITEM_AMOUNT, payload: {id, value}})
}

//maak winkelwagen leeg
const clearCart = () => {
  dispatch({type: CLEAR_CART})
}

useEffect(() => {
  dispatch({type: COUNT_CART_TOTALS})
 localStorage.setItem('winkelwagen', JSON.stringify(state.cart))
 
}, [state.cart])
  return (
    <CartContext.Provider value={{...state, addToCart, removeItem, toggleAmount, clearCart}}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}


