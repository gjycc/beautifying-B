export const validateProducts = (product) => {
    const errors = {};
    if (!product.name.trim()) {
        errors.name = "Se necesita el nombre del producto";
    }
    if (!product.price || product.price <= 0) {
        errors.price = "Se necesita un precio mayor a 0";
    }
    if (!product.description.trim ()) {
        errors.description = "Se necesita una descripción del producto";
    }
    if (!product.file) {
        errors.file = "Se necesita una imagen del producto";
    }
    return errors;
};

    