
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget/CartWidget';
import './nav.css';
import logo from '../../Assets/img/logo.jpg';
import ItemCount from '../pages/home/ItemDetailContainer/ItemCount/ItemCount';
import {Link, NavLink} from 'react-router-dom';


function NavBar() {
return (
    <div>
<Link to='/' > <img src={logo} className='logo' alt="" /></Link><h1>VisualFilm Shop</h1> 

    
        <NavLink to="/"  className='navstyle'  >home        Las Mejores Películas y Series </NavLink>

        <Navbar className='navstyle'>
      <Container  >
        <h1>VisualFilm Shop</h1>

        <Navbar.Brand to="7home">
          Las Mejores Películas y Series{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavLink to="category/home">Estrenos</NavLink >
              <NavLink to="/category/peliculas">Películas</NavLink>
              <NavLink to="category/series">Series</NavLink>
              <NavLink to="/contacto">Contacto</NavLink>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget></CartWidget>
      </Container>
    </Navbar>

    </div>
    
);
}

export default NavBar ;

