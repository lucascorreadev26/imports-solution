import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.jsx'

// CSS
import './index.css'


createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/imports-solution">
    
    <App />
    
  </BrowserRouter>
    
)
