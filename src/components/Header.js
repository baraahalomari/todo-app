import React from 'react'
import { Button, Navbar } from "@blueprintjs/core";
import Login from './Login';
import SignUp from './signup';

function Header() {
    return (
        <Navbar className="bp3-navbar bp3-dark">
            <Navbar.Group className="bp3-navbar-group bp3-align-right">
                <Navbar.Heading className="bp3-navbar-heading">Todo-App</Navbar.Heading>
                <Navbar.Divider />

                <a href="/"><Button className="bp3-minimal" icon="home" text="Home" /></a>
                <a href="/settings"><Button className="bp3-minimal" icon="cog" text="Settings" /></a>
                <Login />
                <SignUp style={{ width: '200px' }} />
            </Navbar.Group>
        </Navbar>

    )
}

export default Header
