import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ products }) => {
    console.log(products, "products en ItemList");
    if (!products.length) {
        return <p>No hay productos disponibles</p>;
    }
    return (
        <div className="products-container">
            {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                    <Item {...product} />
                </Link>
            ))}
        </div>
    );
};