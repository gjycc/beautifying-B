
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
//creación del contexto

const cartContext = createContext();

export const useCart = () => {
    const context = useContext(cartContext);
        if (!context) {
            throw new Error("useCart debe ser usado dentro del CartProvider");
        }
        return context;
};
//proveedor del contexto
export const CartProvider = ({ children }) => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    //Evalua existencia, retorna un booleano
    const isInCart = (item) => {
        const inCart = cart.some((element) => element.id === item.id);
        return inCart;
    };
    //agregar al carrito
    const addItem = (item) => {
        if (isInCart(item)) {
            alert("El producto ya se encuentra en el carrito");
            return;
        }
        setCart([...cart, item]);
        alert("Producto agregado al carrito");
    };

    
    //Eliminar del carrito
    const removeItem = (id) => {
        const updatedCart = cart.filter((element) => element.id !== id);
        setCart(updatedCart);
        alert("Producto eliminado del carrito");
    };
    //vaciar el carrito
    const clearCart = () => {
        setCart([]);
    };
    //Total de items en el carrito para este caso sin cantidad, solo la cantidad de productos distintos
    const getTotalItems = () => {
        return cart.length;
    };

    //Total a pagar
    const getCartTotal = () => {
        return cart.reduce((acc, element) => acc + element.price, 0);
    };

    //Checkout
    const checkout = () => {
        alert("Gracias por su compra");
        clearCart();
        navigate("/");
    };

    const values = { cart, isInCart, addItem, removeItem, clearCart, getTotalItems, getCartTotal, checkout };
    return 
        <cartContext.Provider value={values}>
            {children}
        </cartContext.Provider>
    
};