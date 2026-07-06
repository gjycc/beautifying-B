import {UseEffect} from "react";
import {useParams, Link} from "react-router-dom";

export const ProductSuccess = () => {
    const {id} = useParams();

    return (
        <section className="success-page">
            <h1>El producto se agregó correctamente</h1>
            <p>El producto con ID: {id} ha sido agregado exitosamente.</p>
            <p>Puede agregar más productos haciendo click en el botón.</p>
            <Link className="btn btn-primary primary" to="/admin">Agregar otro producto</Link>
        </section>
    );
};