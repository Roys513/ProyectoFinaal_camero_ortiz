import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify'


const ItemDetail = ({id, nombreArtista, album, precio, img, stock}) => {
    const {agregarAlCarrito} = useContext(CartContext);
  
    const [agregarCantidad, setAgregarCantidad] = useState(0)

    const manejadorCantidad = (cantidad) =>{
      setAgregarCantidad(cantidad)
      
      const item = {id,nombreArtista,precio,album,img};
      agregarAlCarrito(item,cantidad)
      toast.success("Añadido al carrito", {position: "top-right", autoClose: 1500, theme: "dark"})
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
              agregarCantidad > 0 ?(<> <button className='opciones-item-detail'><Link to='/cart'>Ir al carrito <FontAwesomeIcon icon={faCartShopping}> </FontAwesomeIcon></Link></button> <button className='opciones-item-detail'><Link to='/'>Seguir comprando</Link></button> </>) : (<ItemCount inicial={1} stock= {stock}  funcionAgregar= {manejadorCantidad}/>)
            }
            
            </div>
        </div>
    </div>
  )
}

export default ItemDetail