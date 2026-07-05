import { collection, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';

import {db} from '../firebase/config';

const productsRef = collection(db, 'products');

// Obtención de productos
export const getProducts = async () => {
  try {
    const snapshot = await getDocs(productsRef);

    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return productsFormat;
  } catch (err) {
    console.error("Error al traer productos:", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    // Creamos la referencia al documento
    const productRef = doc(db, "products", id);

    // Traemos el documento:
    const snapshot = await getDoc(productRef);

    // Verificamos si existe
    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("Doc:", product);
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al traer producto por ID:", error);
    return null;
  }
};

//Creación de productos
export const createProduct = async (productData) => {
  try {
    //Tan facil como usar la funcion addDoc y pasarle la coleccion y el doc a agregar
    const docRef = await addDoc(productsRef, productData);

    return docRef.id; // opcional, por si quieren usar el id para success, por ej.
    
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};


