import React from 'react';  
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); //The main original html page is in public folder there is a div called root
root.render(
  <React.StrictMode>
    <App />
    {/* <App/> */}
  </React.StrictMode>
);

