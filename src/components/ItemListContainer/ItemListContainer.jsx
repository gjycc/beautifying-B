import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { getProducts } from "../../services/productsService";
import { useParams } from "react-router-dom";

import "../ItemList/ItemList.css";

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    useEffect(() => {
        setLoading(true);
        
       getProducts()
            .then((data) => setProducts(data))
            .catch((err) => console.log("Error:", err))
            .finally(() => {
                setLoading(false);
            });
    }, []); 

    if (loading) {return <p>Cargando...</p>};
        
    return (
        <section>
            <ItemList products={products}/>
        </section>
     );
    
}