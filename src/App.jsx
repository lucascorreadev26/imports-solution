import { useState } from 'react'


// Import Components
import Header from './components/Header'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import About from './components/About'


function App() {

  return(
      <div>
        <Header />
        <Hero />
        <About />
        <ProductList />
      </div>


  )
}

export default App
