import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {
    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CartContext)

    if(totalCantidad === 0){
        return(
            <>
                <div className="carrito-vacio">
                    <h2>Tu carrito está vacío</h2>
                    <Link className="link-seguir-comprando" to="/">Ver productos</Link>
                </div>
            </>
        )
    }

    return (
    <div className='cart'>
            {
                carrito.map(producto => <CartItem key={producto.item.id}{...producto}/>)
            }
        <div className="total-productos">
            <h3 className='total'>Total:{parseFloat(total.toFixed(2))}€</h3>
            <h3 className='cantidad-total'>Cantidad total: {totalCantidad}</h3>
            <div className="botones-final-carrito">
                <button className="vaciar-carrito" onClick={()=>vaciarCarrito()}>Vaciar carrito</button>
                <Link to="/checkout" className='terminar-compra'>Terminar compra</Link>
            </div>
        </div>
    </div>
    )
}

export default Cart