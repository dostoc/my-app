import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import React from 'react';
import Header from './componets/Header';
import Footer from './componets/footer';
import Productos from './componets/Productos';



function App() {
  
  return (
    
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Productos/>}/>
          </Routes>
        <Footer />
        
      </BrowserRouter>
    
  )
}

export default App
