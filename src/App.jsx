import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './componets/Header';
import Footer from './componets/Footer';
import Productos from './componets/Productos';
import useProducto from './hooks/useProducto';
import Detalle from './componets/Detalle';

function App() {

  const {productos,favoritos,agregarAFavoritos,eliminarDeFavoritos} = useProducto();
 
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Productos productos ={productos} agregarAFavoritos={agregarAFavoritos} eliminarDeFavoritos={eliminarDeFavoritos}/>} />
        <Route path='/favoritos' element={<Productos productos ={favoritos} agregarAFavoritos={agregarAFavoritos} eliminarDeFavoritos={eliminarDeFavoritos}/>} />
        <Route path='/producto/:id' element={<Detalle/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
