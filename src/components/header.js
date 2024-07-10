import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.png';

export default function AppHeader(){
    return(
        <Navbar expand="lg">
      <Container fluid>
        
      <Navbar.Brand href="#home">
            <img
              src={logo}
              width="149"
              height="auto"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-lg-0" navbarScroll>
            <Nav.Link href="#action1"><b>About us</b></Nav.Link>
            <Nav.Link href="#action2"><b>Services</b></Nav.Link>
            <Nav.Link href="#action2"><b>Doctors</b></Nav.Link>
            <Nav.Link href="#action2"><b>Testimonials</b></Nav.Link>
            <Nav.Link href="#action2"><b>Contacts</b></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-primary"><b>Make Appointment</b></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}