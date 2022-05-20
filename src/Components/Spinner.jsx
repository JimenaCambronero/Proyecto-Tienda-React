/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react"

const Spinner = () => {
return ( 

    <div className="flex flex-col items-center justify-center max-w-full p-20 mx-auto lg:max-w-7xl lg:items-star">
        <div>
            <iframe 
                src="https://giphy.com/embed/pzvUEkOeAViy7VS7B6" 
                width="200" 
                height="200" 
                frameBorder="0" 
                allowFullScreen
            >
            </iframe>
        </div>
        <div>
            <h4 className="p-4 text-lg tracking-wider uppercase text-black-500 font-shadows">Estamos cargando los productos...</h4>
        </div>
    </div>
);
};

export default Spinner;