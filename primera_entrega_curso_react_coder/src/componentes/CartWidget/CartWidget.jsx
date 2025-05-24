import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalCantidad} = useContext(CartContext);
    const carritoImagen = "https://cdn.pixabay.com/photo/2015/10/22/16/42/icon-1001596_1280.png";
return (
    <Link to="/cart" className="carrito">
        <div className="carrito">
            <img src={carritoImagen}    alt="Imagen de carrito" />
            {
                totalCantidad > 0 && <strong>{totalCantidad}</strong>
            }
        </div>
    </Link>
)
}

export default CartWidget