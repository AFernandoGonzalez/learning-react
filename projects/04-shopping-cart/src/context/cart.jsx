import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        //check if product is already in cart
        const productInCartIndex= cart.findIndex(item => item.id === product.id)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}