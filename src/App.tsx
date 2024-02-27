// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Inicio} from './Pages/inicio'
import Navbar from './Components/Navbar'

function App() {

  // const location = useLocation();
  // const showNavbar = !['/inicioCliente', '/comidaCliente', '/camaraCliente'].includes(location.pathname);

  return (
    <>
      <Router>
      {/* {showNavbar && <Navbar />} */}
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Inicio/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
