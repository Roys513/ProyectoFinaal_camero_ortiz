import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'


const ItemDetail = ({id, nombreArtista, album, precio, img, stock}) => {
    const {agregarAlCarrito} = useContext(CartContext);
  
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const manejadorCantidad = (cantidad) =>{
      setAgregarCantidad(cantidad)
      
      const item = {id,nombreArtista,precio,album};
      agregarAlCarrito(item,cantidad)
    }

  return (
    <div className="item_detail">
      <div className="item_detail_container">

        <div className="item_detail_img">
          <img src={img} alt={album} />
        </div>
          
            <div className="item_detail_content">
            <h2>{album}</h2>
            <h3>{nombreArtista}</h3>
            <h4>{precio}€</h4>
            
            {
              agregarCantidad > 0 ?(<Link to='/cart'>Ir al carrito</Link>) : (<ItemCount inicial={1} stock= {stock}  funcionAgregar= {manejadorCantidad}/>)
            }
            
            </div>
        </div>
    </div>
  )
}

export default ItemDetail