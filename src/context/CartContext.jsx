import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [ cart, setCart ] = useState([]); 

    const addToCart = (item, qty) => {
        if (isInCart(item.id)) {
            console.log("El item ya está en el carrito");
            const carritoActualizado = cart.map((prod) => {
                if (prod.id === item.id) {
                    return { ...prod, quantity: prod.quantity + qty };
                }
                return prod;
            });
            setCart(carritoActualizado);
        } else{
            setCart([...cart, { ...item, quantity: qty }]);
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

    return (

    <CartContext.Provider value={{cart}}>
        {children}
    </CartContext.Provider>
    );
};

