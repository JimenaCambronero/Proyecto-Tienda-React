// import BurguerButton from './BurguerButton'
import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";
import { useState } from "react";
import LogoNavBar from './LogoNavBar';



const NavBar = () => {


  const [show, setShow] = useState(false);
  
  const cambiarTexto =(e) => {
    if(e.target.innerHTML === 'Ver Categorias'){
      e.target.innerHTML = 'Ocultar Categorias';
    }else{
      e.target.innerHTML='Ver Categorias';
    }
  }

  return (
    <>
      <div className="bg-gray-300">
        <div className="relative max-auto">
          <div className="pt-1 mx-7">
            <div className="flex items-center justify-between px-10 pb-2 border-b border-gray-200">
              <Link to="/" className="block w-60">
                <LogoNavBar/>
              </Link>

              <div className="hidden lg:block">
                <ul className="flex items-center space-x-7">
                  <li className="p-2 text-xl tracking-widest text-gray-800 uppercase font-boogaloo">
                    <Link to="/">Home</Link>
                  </li>
                  <button
                    onClick={() => setShow(!show)}
                    className="p-2 text-xl tracking-widest text-gray-800 uppercase font-boogaloo focus:outline-none">
                    <Link to="/" onClick ={cambiarTexto} >Ver Categorias</Link>
                  </button>
                </ul>
              </div> 
              <CardWidget/>    
              {/* <BurguerButton/> */}
            </div>
          </div>
          <hr className="w-full mb-1 border-gray-400" />
          <div>
            {show ? (
              <ul className="flex justify-center py-2 space-x-6 text-xs font-medium tracking-widest text-gray-600 uppercase select-none font-boogaloo ">
                <Link to="/category/tote">Totes</Link>
                <Link to="/category/home"> Hogar</Link>
                <Link to="/category/accesorios">Accesorios</Link>
              </ul>
            ) :
             <>
             </> }
          </div>
        </div>
      </div>
     
      
    </>
  );
};

export default NavBar;
