import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/emptyCart.css'
const EmptyCart = () => {
  return (
    <div className='emptyCartContainer'>
        <h2>Tu carrito esta vacio!</h2>
        <h3>Te invitamos a ver nuestro productos</h3>
        <Link className='buttonHome' to='/'>Ir a home</Link>
    </div>
  )
}

export default EmptyCart