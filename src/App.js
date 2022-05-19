import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import NotFound404 from './Page/NotFound404';
import Footer from './Components/Footer';
import CartContextProvider from './context/CartContext';


function App() { 
  
 
  return (


  <CartContextProvider>
      <BrowserRouter>
        <Navbar/>  
         
          <Routes>
            <Route 
                path='/'
                element={<ItemListContainer/>}/>
            <Route 
                path='/detalleProducto/:itemId' 
                element={<ItemDetailContainer />}/>
            <Route 
                path='/category/:categoryId' 
                element={<ItemListContainer/>}/>
            <Route 
                path='*' 
                element= {<NotFound404/>}/>
          </Routes> 
            
        <Footer/>
      </BrowserRouter>
  </CartContextProvider>

   
  );
}

export default App;
