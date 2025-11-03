import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import '../../styles/cartView.css'



const CartView = () => {
    const {cart, deleteItem, removeList, total}= useContext(CartContext)
  return (
    <div>
        <h1 className='tituloCompra'>Tu carrito 🛒</h1>
        <div>
            {
                cart.map((compra)=>(
                    <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
                        <img src={compra.image} alt={compra.title} style={{width:'9rem'}}/>
                        <span>{compra.title}</span>
                        <span>${compra.price},00</span>
                        <span>Cantidad: {compra.quantity}</span>
                        <span>Precio final: ${compra.quantity * compra.price},00</span>
                        <button className='deleteItem' onClick={()=> deleteItem(compra.id)}>X</button>
                    </div>
                ))
            }
        </div>
        <span>Total a pagar: $ {total()}, 00</span>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
            <button className='vaciarCarrito' onClick={removeList}>Vaciar Carrito</button>
            <Link to='/checkout' className='terminarCompra'>Terminar compra</Link>
        </div>
    </div>
  )
}

export default CartView