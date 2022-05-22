import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDlLUuMmqOVaUiX0ptTt62cUtUXuJ7bBkk",
  authDomain: "tienda-react-3595d.firebaseapp.com",
  projectId: "tienda-react-3595d",
  storageBucket: "tienda-react-3595d.appspot.com",
  messagingSenderId: "482620642488",
  appId: "1:482620642488:web:2ca62f23918f9aef71104d"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 
reportWebVitals();
