import logo from '../../assets/photo-navbar.png'
import CartWidget from '../CartWidget'


const Navbar = () => {
    return (
        <header className="header">
            <nav className="navbar container">
                <menu className="navbar__menu">
                    <li className="navbar__item">
                        <a href="" className="navbar__link">Inicio</a>
                    </li>
                    <li className="navbar__item">
                        <a href="" className="navbar__link">Productos</a>
                    </li>
                    <li className="navbar__item">
                        <a href="" className="navbar__link">Muebles</a>
                    </li>
                    <li className="navbar__item">
                        <a href="" className="navbar__link">Contacto</a>
                    </li>
                </menu>
                <figure className="navbar__logo">
                    <img src={logo} alt="Floki diseño en madera logo" width="80" height="40" />
                </figure>
                <div className="navbar__right">
                    <form className="navbar__search">
                        <input 
                            type="text" 
                            placeholder="Qué estás buscando?" 
                            className="navbar__search-input" 
                        />
                        <button type="submit" className="navbar__search-button">Buscar</button>
                    </form>
                        <a href="" className="navbar__cart"><CartWidget/></a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;


 