import { Navbar, NavbarBrand } from 'reactstrap';

function FooterComponent() {
    return (
    <Navbar dark color="primary">
        <div className="container">
            <NavbarBrand href="/">&copy; TBEducation</NavbarBrand>
        </div>
    </Navbar>
    )
}
export default FooterComponent;