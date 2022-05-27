import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function HeaderComponent () {
    return (
    <Navbar dark color="primary">
        <div class="container">
            <NavbarBrand href="/">Technology Business Education</NavbarBrand>
        </div>
    </Navbar>
    )
}
export default HeaderComponent;