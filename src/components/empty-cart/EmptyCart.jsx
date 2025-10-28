import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
        <h2>Tu carrito esta vacio! 😱</h2>
        <h3>Te invitamos a ver nuestro productos</h3>
        <Link to='/'>Ir a home</Link>
    </div>
  )
}

export default EmptyCart