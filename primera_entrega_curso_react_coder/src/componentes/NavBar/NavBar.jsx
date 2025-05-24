import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
return (
    <>
   <header>
    <Link to="/">
    <h1 className="navbar_h1">Musidisc</h1>
    </Link>
    
    <div className="nav_cart">
    <nav className="navbar_nav">
        <ul className="navbar_ul">
            <li>
                <NavLink to="categoria/cd">Cds</NavLink>
            </li>
            <li>
                <NavLink to="categoria/vinilos">Vinilos</NavLink>
            </li>
            <li>
                <NavLink to="categoria/cassettes">Cassettes</NavLink>
            </li>
        </ul>
    </nav>
    <CartWidget/>
    </div>


   </header>
    </>
)
}

export default NavBar