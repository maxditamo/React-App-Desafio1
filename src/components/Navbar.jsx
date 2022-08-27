
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
// import CartWidget from './CartWidget'
import React from 'react';
import LogoApaBars from './img/logoApaBars.jpg';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function NavScrollExample() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid>
          <Navbar.Brand href="index.html">
            <img
              src={LogoApaBars}
              width="40"
              height="40"
              className="d-flex-start"
              alt="Apa Bars logo"
            />
          </Navbar.Brand>
        <Navbar.Brand href="index.html">APA Bars</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="index.html">Home</Nav.Link>
            <NavDropdown title="All Bars" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Almond</NavDropdown.Item>
              <NavDropdown.Item href="#action2">
                Nuts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                Chocolate
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="All Oatmeal" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">Almond</NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Nuts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
                Chocolate
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action7">Our story</NavDropdown.Item>
              <NavDropdown.Item href="#action8">
                Healthy life
              </NavDropdown.Item>
              <NavDropdown.Item href="#action9">
                Comunity
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Login</Button>{' '}
            <Button type="button" className="btn btn-warning ms-2 d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart me-2 d-flex " viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                    </svg><span>2</span></Button>{' '}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}




export default NavScrollExample;
// export default Navbar;