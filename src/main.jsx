import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
//boostrap bundles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.bundle.min.js";
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
        <App />
    </HashRouter>
  </StrictMode>,
)
