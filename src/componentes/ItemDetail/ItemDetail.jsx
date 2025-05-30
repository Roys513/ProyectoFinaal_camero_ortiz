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
              stock === 0 ? <p><span className='p-producto-no-disponible'>Producto no disponible</span> <span className='p-estamos-trabajando'>Estamos trabajando para volver a tenerlo pronto</span></p> :
              agregarCantidad > 0 ?(<> <Link to='/cart'><button className='opciones-item-detail'>Ir al carrito <FontAwesomeIcon icon={faCartShopping}> </FontAwesomeIcon></button></Link> <Link to='/'><button className='opciones-item-detail'>Seguir comprando</button></Link> </>) : (<ItemCount inicial={1} stock= {stock}  funcionAgregar= {manejadorCantidad}/>)
            }
            
            </div>
        </div>
    </div>
  )
}

export default ItemDetail