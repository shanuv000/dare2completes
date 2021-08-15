import {Navbar, Container, Nav} from 'react-bootstrap'
import Drawers from '../components/Drawers'

const NavbarsTop = () => {
    return <>
        <br/>
        <nav className="navbar navbar-light bg-light d-flex justify-content-between fixed-top ">

            <a className="navbar-brand d-xs-none d-md-block">Navbar</a>
            <i className="fas fa-chevron-left text-info p-3" />

            <i className="fas fa-hamburger" />
            <i className="fas fa-home"/>
        </nav>


        {/*<Navbar fill bg={"light"} expanded={false} variant="dark"*/}
        {/*        fixed="top"*/}
        {/*>*/}
        {/*    <Container >*/}
        {/*        <Navbar.Brand  href="/"><img*/}
        {/*            // src="https://i.gifer.com/74zF.gif"*/}
        {/*            src={'https://i.gifer.com/74zF.gif'}*/}
        {/*            className={'img-fluid'}*/}
        {/*            width="40px"*/}
        {/*            height=""*/}
        {/*            alt=""/></Navbar.Brand>*/}

        {/*        <Nav className="me-auto ">*/}
        {/*            <Nav.Link className=" text-dark  " ><Drawers /></Nav.Link>*/}
        {/*            <Nav.Link className=" text-dark" href="/">Home</Nav.Link>*/}
        {/*            <Nav.Link className=" text-dark" href="/form">Form</Nav.Link>*/}
        {/*            <Nav.Link className=" text-dark" href="/second">Second Slide</Nav.Link>*/}


        {/*        </Nav>*/}
        {/*    </Container>*/}
        {/*</Navbar>*/}
    </>
}
export default NavbarsTop;