import './Navbar.scss'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export const Navbar = () => {

    return (
        <header className="header">
            <div className="headerContainer">
                {/* <img className="header" alt='logo'/> */}

                <nav className="navbar">
                    <Link to='/' className="navbarLink">Inicio</Link>
                    <Link to='/vehiculos/auto' className="navbarLink">Autos</Link>
                    <Link to='/vehiculos/camioneta' className="navbarLink">Camionetas</Link>
                    <Link to='/vehiculos/moto' className="navbarLink">Motos</Link>
                    <Link to='/contacto' className="navbarLink">Contacto</Link>
                </nav>

                <CartWidget />
            </div>
        </header>
    )
}