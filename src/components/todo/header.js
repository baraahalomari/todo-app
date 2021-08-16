import React from 'react'
import {Link } from 'react-router-dom';

function Header() {
    return (

        <header>
            <nav>
                <Link to='/settings'>settings</Link>
                <Link to='/'>Main page</Link>
            </nav>
        </header>

    )
}

export default Header