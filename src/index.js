import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./Components/Header"
import Intro from './Components/Intro';
import App from './App';
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import DuplicateApp from './Components/DuplicateApp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <DuplicateApp/>
  </BrowserRouter>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import About from './Routes/About';
// import DuplicateApp from "./Routes/DuplicateApp";

// import { BrowserRouter } from 'react-router-dom';
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//   <DuplicateApp/>
//   </BrowserRouter>
// );
