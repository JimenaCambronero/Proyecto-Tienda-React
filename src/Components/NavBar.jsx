// import BurguerButton from './BurguerButton'
import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="bg-gray-100">
        <div className="relative max-auto">
          <div className="pt-1 pb-2 mx-7">
            <div className="flex items-center justify-between px-10 pb-2 border-b border-gray-200">
              <Link to="/" className="block cursor-pointer w-60">
                <img
                  className="w-20 h-20 rounded-full p-b "
                  src="https://simonscat.com/wp-content/uploads/2014/09/website-buttons_v2-03.jpg"
                  alt="logo"
                />
              </Link>

              <div className="hidden font-mono lg:block">
                <ul className="flex items-center space-x-7">
                  <li className="p-2 text-lg">
                    <Link to="/">Home</Link>
                  </li>
                  <button
                    onClick={() => setShow(!show)}
                    className="p-2 text-lg focus:outline-none">
                    <Link to="/">Todos los Productos</Link>
                  </button>
                </ul>
              </div>
              <CardWidget />
              {/* <BurguerButton/> */}
            </div>
          </div>
          <div>
            {show ? (
              <ul className="flex justify-center py-4 space-x-6 text-xs font-medium text-gray-800 uppercase border-gray-200 select-none">
                <Link to="/category/tote">Totes</Link>
                <Link to="/category/home"> Hogar</Link>
                <Link to="/category/accesorios">Accesorios</Link>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
