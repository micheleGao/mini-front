import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Navigation() {

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Mini Cat Camp</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/students">Students</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
};