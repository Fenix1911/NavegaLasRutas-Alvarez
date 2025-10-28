import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [ cart, setCart ] = useState([]); 

    const addToCart = (product, qty) => {
        if (isInCart(product.id)) {
            console.log("El item ya está en el carrito");
            const carritoActualizado = cart.map((prod) => {
                if (prod.id === product.id) {
                    return { ...prod, quantity: prod.quantity + qty };
                }
                return prod;
            });
            setCart(carritoActualizado);
        } else{
            setCart([...cart, { ...product, quantity: qty }]);
        }
    }  

    const removeList = () => {
        setCart([]);
    }
    const deleteItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id));
    }
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    }
    
     const total = ()=> {
        return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),0)
    }

    const cartQuantity = ()=>{
        return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
    }


    const itemQuantity = (id)=>{
        const itemCart = cart.find((prod)=> prod.id === id)

    if(itemCart){
        return itemCart.quantity
    }else{
        //no existe
        return 0
    }
    }

    return (

    <CartContext.Provider value={{cart, addToCart, removeList, deleteItem, total, cartQuantity, itemQuantity }}>
        {children}
    </CartContext.Provider>
    );
};

