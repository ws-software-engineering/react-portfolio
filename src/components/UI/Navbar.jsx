import { useState } from "react";

// Components from React Bootstrap
import Offcanvas from "react-bootstrap/Offcanvas";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function ResponsiveNav({ links }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Will Schultz | Software Engineer</Navbar.Brand>
          <Button
            variant="outline-light"
            className="d-lg-none"
            onClick={handleShow}
          >
            Menu
          </Button>
          <Offcanvas show={show} onHide={handleClose} responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Will Schultz Designs, Inc</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p className="main-navbar-links mb-1">
                {links.map((link) => link)}
              </p>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default ResponsiveNav;
