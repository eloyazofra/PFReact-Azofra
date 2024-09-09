import logo from '../../assets/photo-navbar.png'
import CartWidget from '../CartWidget'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = () => {
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
                        <a href="" className="navbar__cart"><CartWidget/></a>
                </div>
            </Navbar>
        </header>
    );
}

export default CustomNavbar;


 