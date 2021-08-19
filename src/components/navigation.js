import React from "react";
import {Navbar} from 'react-bootstrap';
import Login from './Login';
import SignUp from './signup';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">
        Welcome Home
    </Navbar.Brand>
      <Login />
      <SignUp />
    </Navbar>
  );
};

export default NavBar;