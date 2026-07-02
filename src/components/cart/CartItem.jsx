import { useCart } from "../../context/CartContext";
import { Item } from "../Item/Item.jsx";

export const CartItem = ({ item }) => {
    const { removeItem } = useCart();
    return (
        <Item {...item}>
            <button 
            className="btn bg-danger primary" 
            onClick={() => removeItem(item.id)}>
            Eliminar
            </button>
        </Item>
    );

    
};