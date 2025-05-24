import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id, nombreArtista, album, precio, img}) => {
  return (
    <div className="card">
        <img src={img} alt={album}/>
        <h3>{nombreArtista}</h3>
        <h4>{album}</h4>
        <p>{precio}€</p>
        <Link to={`/item/${id}`}>
        <button>Ver detalles</button>
        </Link>
    </div>
  )
}

export default Item