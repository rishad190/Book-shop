import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Header.css";
import { UserContext } from "../../App";

const Header = () => {
  const [user, setUser] = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="/home">BOOK SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <div className="link_In">
              <Link to="/home">Home</Link>
              <Link to="/order">Orders</Link>
              <Link to="/admindisplay">Admin</Link>
              <Link to="/product">Deals</Link>
            </div>
          </Nav>

          <Link to="/login">
            {user.success && <img src={user.image} alt="" />}
            {!user.success && <Button variant="outline-success">Login</Button>}
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
