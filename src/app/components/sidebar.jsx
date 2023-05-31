import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../components/styles.module.css"

const Sidebar = () => {
    return(
        <Navbar bg="primary" variant="dark" className={styles.sidebar}>
        <Container className={styles.container}>
          <Navbar.Brand className={styles.name}>Navbar</Navbar.Brand>
          <Nav className={styles.sidebarItem}>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/pricing'>Pricing</Nav.Link>
            <Nav.Link href='/features'>Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    )
}

export default Sidebar