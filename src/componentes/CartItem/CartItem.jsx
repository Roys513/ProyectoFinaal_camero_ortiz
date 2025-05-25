import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({item,cantidad}) => {

const {eliminarProducto} = useContext(CartContext)

return (
    <div className="cart-item">
        <div className="imagen-producto">
            <img src={item.img} alt={item.album} />
        </div>
        <div className="contenido">
            <h4>{item.nombreArtista} - {item.album}</h4>
            <p>Cantidad: {cantidad}</p>
            <p>Precio: {item.precio}€</p>
            <button onClick={()=>eliminarProducto(item.id)}>Eliminar</button>
        </div>
    </div>
)
}

export default CartItem