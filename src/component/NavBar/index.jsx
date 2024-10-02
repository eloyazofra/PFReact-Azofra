import logo from '../../assets/photo-navbar.png'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


const CustomNavbar = ({totalQuantity}) => {
    return (
        <header className="header">
            <Navbar>
                <menu className="navbar__menu">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <Nav.Link as={Link} to="/Contact">Contacto</Nav.Link>
                </menu>

                <Navbar.Brand as={Link} to=""><img src={logo} alt="Floki"  width="100" height="50" /></Navbar.Brand>

                <div className="navbar__right">
                    <form className="navbar__search">
                        <input 
                            type="text" 
                            placeholder="Qué estás buscando?" 
                            className="navbar__search-input" 
                        />
                        <button type="submit" className="navbar__search-button">Buscar</button>
                    </form>
                    <Nav.Link as={Link} to="/cart">
              <CartWidget quantity={totalQuantity} />
            </Nav.Link>
                </div>
            </Navbar>
        </header>
    );
}

export default CustomNavbar;


 