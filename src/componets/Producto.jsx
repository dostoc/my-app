import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import NoFavImg from '../img/onlike.png';
import FavImg from '../img/ondislike.png';

export default function Producto({producto, agregarAFavoritos, eliminarDeFavoritos}) {
  
  const [favorito, setFavorito] = useState(false)
  
  function handleClick() {
    if (favorito) {
      eliminarDeFavoritos(producto)
      setFavorito(false)
    } else {
      agregarAFavoritos(producto)
      setFavorito(true)
    }
  }


  return (
    <div className="producto">
      <Link to={`/`}>        <img src={producto.image} alt="img-prod" />       </Link>
      <div className="info">
        <p>{producto.title}</p>
        <mark>${producto.price}</mark>
      </div>
      {
        favorito ? 
        <img className='fav-icon' onClick={handleClick} src={NoFavImg}  />
        : 
        <img className='fav-icon' onClick={handleClick} src={FavImg}  />
      }
    </div>
  );
}
