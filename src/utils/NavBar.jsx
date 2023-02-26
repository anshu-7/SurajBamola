import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar() {    
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">CONSULTANCY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="/pf">PF Registration</NavDropdown.Item>
              <NavDropdown.Item href="/esic">ESIC Registration</NavDropdown.Item>
              <NavDropdown.Item href="/dsc">DSC Registration</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PF Withdrawal</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">MSME Registration</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>

            <NavDropdown title="Service Areas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Dehradun</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Haridwar</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>

            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Gallery</Nav.Link>
            <Nav.Link href="/contactUs">Contact Us</Nav.Link>
            <Nav.Link href="#link">Career</Nav.Link>
            <Nav.Link href="#link">Privacy Policy</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;