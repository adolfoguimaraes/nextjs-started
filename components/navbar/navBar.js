import styles from './navbar.module.css'

import {Navbar, Container, Nav} from 'react-bootstrap'

import {FaInstagram, FaGithub, FaTwitter} from 'react-icons/fa'


export default function NavBar({siteTitle}) {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/about/">About the project</Nav.Link>
                    </Nav>
                    <Nav>
                    <Navbar.Brand className={styles.created_text}>created by @adolfoguimaraes</Navbar.Brand>
                    <Nav.Link href="https://instagram.com/profadolfoguimaraes"><FaInstagram /></Nav.Link>
                    <Nav.Link href="https://github.com/adolfoguimaraes"><FaGithub /></Nav.Link>
                    <Nav.Link href="https://twitter.com/adolfoguimaraes"><FaTwitter /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </>
    )
}