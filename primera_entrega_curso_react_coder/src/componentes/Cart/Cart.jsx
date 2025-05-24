import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CartContext)

    if(totalCantidad === 0){
        return(
            <>
                <h2>Tu carrito está vacío</h2>
                <Link to="/">Ver productos</Link>
            </>
        )
    }

    return (
    <div>
        {
            carrito.map(producto => <CartItem key={producto.item.id}{...producto}/>)
        }
        <h3>Total:{total}€</h3>
        <h3>Cantidad total: {totalCantidad}</h3>
        <button onClick={()=>vaciarCarrito()}>Vaciar carrito</button>
        <Link to="/checkout">Terminar compra</Link>
    </div>
    )
}

export default Cart