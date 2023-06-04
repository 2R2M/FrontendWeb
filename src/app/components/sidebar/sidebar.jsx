import styles from "./styles.module.scss";

import Menu from "../menu/Menu";

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useDispatch } from 'react-redux';
import { observer } from "mobx-react";
import { useState } from "react";


const Sidebar = observer(() => {
  //const menu = useSelector((state) => state.menu.menu[0].menuAttribute)
  //const { master } = useContext(Context)
  const dispatch = useDispatch()
  const [menuActive, setMenuActive] = useState(true)
  //const navigate = useNavigate()
    return(
      <div>
        <Navbar bg="primary" variant="dark" className={styles.sidebar}>
        <Container className={styles.container}>
          <Navbar.Brand className={styles.name}>Navbar</Navbar.Brand>
          <Nav className={styles.sidebarItem}>
            {
             <Menu
             items={[
               { path: '/computers', name: 'Компьютеры' },
               { path: '/components', name: 'Компоненты' },
               { path: '/features', name: 'Личная информация' },
             ]}
             menuActive={menuActive}
             setMenuActive={setMenuActive}
           />
}
          </Nav>
        </Container>
      </Navbar>
        
       </div>
    )
})

export default Sidebar;