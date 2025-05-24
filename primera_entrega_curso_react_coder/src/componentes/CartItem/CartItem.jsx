import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({item,cantidad}) => {

const {eliminarProducto} = useContext(CartContext)
console.dir(item)
console.log(cantidad)

return (
    <div>
        <h4>{item.nombreArtista} - {item.album}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: {item.precio}€</p>
        <button onClick={()=>eliminarProducto(item.id)}>Eliminar</button>
    </div>
)
}

export default CartItem