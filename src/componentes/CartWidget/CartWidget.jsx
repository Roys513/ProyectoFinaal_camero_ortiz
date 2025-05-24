import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    const {totalCantidad} = useContext(CartContext);

    return (
    <Link to="/cart">
        <div className="carrito">
            <FontAwesomeIcon className="icon" icon={faCartShopping} />
            {
                totalCantidad > 0 && <span className="contador">{totalCantidad}</span>
            }
        </div>
    </Link>
)
}

export default CartWidget