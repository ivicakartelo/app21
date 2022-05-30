import { Navbar, NavbarBrand } from 'reactstrap';

function HeaderComponent() {
    return (
    <Navbar dark color="primary">
        <div className="container">
            <NavbarBrand href="/">Technology Business Education</NavbarBrand>
            <NavbarBrand href="/about">About us</NavbarBrand>
            <NavbarBrand href="/clients">Clients</NavbarBrand>
        </div>
    </Navbar>
    )
}
export default HeaderComponent;