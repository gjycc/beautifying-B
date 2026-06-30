import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
export const ItemDetailContainer = () => {
    const { id } = useParams();
    
    const [itemDetail, setItemDetail] = useState({});
    const [loading, setLoading] = useState(true);


useEffect(() => {
    fetch("/data/products.json")
        .then((response) => response.json())
        .then((data) => {
            const item = data.find((element) => String(element.id) === id);
            if (item) {
                setItemDetail(item);
                return;
            }
    
    throw new Error("Producto no encontrado"); })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
}, [id]);
console.log(itemDetail, "itemDetail en ItemDetailContainer");
if (loading) {
    return <p>Cargando...</p>
    };
    if(!itemDetail) {
        return <p>Producto no encontrado</p>
    };
    return(<section>
        <h1>Detalle del producto</h1>
        
        <div className="products-container">
            <ItemDetail item={itemDetail} />
        </div>
    </section>);
    

}