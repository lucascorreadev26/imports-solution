// Hoks
import { useState } from 'react'

// Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Components
import Header from './components/Header'
import Footer from './components/Footer'
// Icons
//import { Home, Route } from 'lucide-react'

// Pages
import Home from "./pages/Home";
import CatalogoIphones from './pages/CatalogoIphones';
import AboutSolution from './pages/AboutSolution';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return(
    <div>
      <ScrollToTop />
      <Header /> 
        <Routes>
          <Route path='/'  element={< Home />}/>
          <Route path='/CatalogoIphones' element={< CatalogoIphones />}/>
          <Route path='/AboutSolution' element={<AboutSolution />}/>
        </Routes>
      <Footer /> 
    </div>

  )
}

export default App
