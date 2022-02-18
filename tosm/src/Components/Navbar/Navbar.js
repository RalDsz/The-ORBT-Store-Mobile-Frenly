import React from 'react'
import logo from '../tos.PNG'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavBar() {
  return (
    <div>
      <Navbar fixed="top" />
         <Navbar sticky="top" className="navbar-bgnd" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" ><img className="Nav__logo" src={logo} alt=""/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="Nav__link">Home</Nav.Link>
              <Nav.Link href="#action2"  className="Nav__link">About ORBT</Nav.Link>
              
              <NavDropdown title="Product Category" id="navbarScrollingDropdown"  >
                <NavDropdown.Item href="#action3" >Home Essentials</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Gaming </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5"  >
                  Fashion
                </NavDropdown.Item>
                
              </NavDropdown>
              <Nav.Link href="#" disabled className="Nav__link" >
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button  className="Nav__sbutton" variant="success">Search</Button>
            </Form>
            <ShoppingCartIcon className="Nav__cart"/>
            <span className="header__optionLineTwo header__basketCount"> 1</span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavBar