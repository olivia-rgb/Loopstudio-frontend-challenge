import React from 'react'
import "./App.css"
import Header from './Components/Header'
import About from './Components/About'
import Creations from './Components/Creations'
import Footer from './Components/Footer'


function App() {
  return (
    <div>
      <Header />
      <About />
      <Creations />
      <Footer />
    </div>
  )
}

export default App