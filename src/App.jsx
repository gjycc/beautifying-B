
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/cart/CartView';
import { ProductSuccess } from './components/adminComponent/ProductSuccess';
import { ProductFormContainer } from './components/adminComponent/ProductFormContainer';


function App() {
  
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
          <Route path='/Carrito' element={<CartView />} />
          <Route path='/admin' element={<ProductFormContainer />} />
          <Route path='/success/:id' element={<ProductSuccess />} />
          <Route path= 'products/new' element={<ProductFormContainer />} />
        </Routes> 
      </main>
      <Footer />
    </>
  );
}

export default App;
                   