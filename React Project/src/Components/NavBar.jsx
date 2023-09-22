import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaRegMoon, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSolidLogOut } from "react-icons/bi";
import { AiFillPlusCircle, AiOutlineLogin } from "react-icons/ai";
function NavScrollExample({ usertype, switchTheme }) {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className="nav" href="#">
          BCard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0, nav"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              ABOUT US
            </Nav.Link>
            {usertype == "regular" && (
              <>
                <Nav.Link as={Link} to="/logout">
                  LOGOUT
                </Nav.Link>
                <Nav.Link as={Link} to="">
                  FAV CARDS
                </Nav.Link>
              </>
            )}

            {usertype == "business" && (
              <>
                <Nav.Link as={Link} to="card-fav">
                  FAV CARDS
                </Nav.Link>
                <Nav.Link as={Link} to="/business-create">
                  CREATE CARD
                </Nav.Link>
                <Nav.Link as={Link} to="/my-card">
                  MY CARDS
                </Nav.Link>
                <Nav.Link as={Link} to="/logout">
                  <BiSolidLogOut size={24} /> LOGOUT
                </Nav.Link>
              </>
            )}
            {usertype == "admin" && (
              <>
                <Nav.Link as={Link} to="/logout">
                  <BiSolidLogOut size={24} /> LOGOUT
                </Nav.Link>
                <Nav.Link as={Link} to="/card-fav">
                  FAV CARDS
                </Nav.Link>
                <Nav.Link as={Link} to="/business-create">
                  CREATE CARD
                </Nav.Link>
                <Nav.Link as={Link} to="/my-card">
                  MY CARDS
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  SENDBOX
                </Nav.Link>
              </>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Nav
            className="me-2 my-2 my-lg-0"
            style={{ maxHeight: "100px", marginRight: "20px" }}
            navbarScroll
          >
            <FaRegMoon
              onClick={switchTheme}
              style={{ margin: "10px", cursor: "pointer", fontSize: "23px" }}
            ></FaRegMoon>

            {usertype == "admin" && (
              <FaUserCircle style={{ margin: "10px", fontSize: "30px" }} />
            )}
            {usertype == "business" && (
              <FaUserCircle style={{ margin: "10px", fontSize: "30px" }} />
            )}
            {usertype == "regular" && (
              <FaUserCircle style={{ margin: "10px", fontSize: "30px" }} />
            )}

            {usertype == "guest" && (
              <>
                <Nav.Link as={Link} to="/register">
                  <AiFillPlusCircle size={25} /> SIGNUP
                </Nav.Link>
                <Nav.Link as={Link} to="/login">
                  <AiOutlineLogin size={24} /> LOGIN
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
