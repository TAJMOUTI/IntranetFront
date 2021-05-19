import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo_stilog from '../../Assets/logo_stilog.png';
import './Navigation.css';

export default function Navigation(){

    return (
        <Navbar className='color-nav'  variant="dark">
            
            <Navbar.Brand href="#home"><img
                alt="Logo Stilog"
                src={logo_stilog}
                width="120"
                height="40"
                className="d-inline-block align-top"
            /></Navbar.Brand>
            
            <Nav className="menu mr-auto ml-auto">
                <Nav.Link href="#home">Accueil<i class="fas fa-home"></i></Nav.Link>
                <Nav.Link href="#features">Librairies</Nav.Link>
                <Nav.Link href="#pricing">Formation</Nav.Link>
                <Nav.Link href="#pricing">Outils</Nav.Link>
                <Nav.Link href="#pricing">Support</Nav.Link>
                <Nav.Link href="#pricing">Capitalisation</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );

}