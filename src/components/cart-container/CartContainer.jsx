import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import EmptyCart from '../empty-cart/EmptyCart'
import CartView from '../cart-view/CartView'

const CartContainer = () => {
    const {cart}= useContext(CartContext)
  return (
    <div>
        {
            !cart.length 
            ? <EmptyCart/> 
            : <CartView/>
        }
    </div>
  )
}

export default CartContainer