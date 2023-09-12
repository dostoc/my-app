import React, { useEffect, useState, mark } from 'react'
import { obtenerProductos } from '../servicios/productoService'
import Producto from './Producto';

export default function Productos() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        obtenerProductos().then(data => {
            console.log(data);
            setProductos(data)
        })
    }, [])

    return (
        <div>
            {
                productos.map(producto => (
                    <div className="productos">
                        <div className="info">
                            <p>{producto.title}</p>
                            <mark>${producto.price}</mark>
                        </div>
                    </div>))
            }
        </div>
    )
}