import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function FooterComponent () {
    return (
    <Navbar dark color="primary">
        <div class="container">
            <NavbarBrand href="/">&copy; TBEducation</NavbarBrand>
        </div>
    </Navbar>
    )
}
export default FooterComponent;