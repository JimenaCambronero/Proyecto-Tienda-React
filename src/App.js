import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Navbar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import NotFound404 from './pages/NotFound404';
import Footer from './Components/Footer';
// import ItemDetail from './Components/ItemDetail'
import ItemDetailContainer from './Components/ItemDetailContainer';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/detalleProducto/:itemId' element={<ItemDetailContainer />}/>
          <Route path='*' element= {<NotFound404/>}/>
          </Routes>   
      <Footer/>
    </BrowserRouter>
    </>
    
  );
}

export default App;
