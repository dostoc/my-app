import React, { useEffect, useState } from 'react';
import { obtenerProductos } from '../servicios/productoService';
import Producto from './Producto';
import useProducto from '../hooks/useProducto';

export default function Productos() {
  const { productos } = useProducto();

  return (
    <div className="productos">
      {productos.map((producto) => (
        <Producto key={producto.id} producto={producto} />
      ))}
    </div>
  );
}
