import React from 'react';
import { Navbar, Nav, NavItem, Collapse } from 'react-bootstrap';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      navItems: [
        { text: 'Home', href: '/home' },
        { text: 'About', href: '/about' },
        { text: 'Motto', href: '/motto' },
      ]
    }
  }
  render() {
    const { navItems } = this.state;
    const navItemsComponents = navItems.map((props, index) => <NavItem eventKey={index} href={props.href}>{props.text}</NavItem>);
    return (
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Lotu</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              { navItemsComponents }
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={0} href="#">Sign in</NavItem>
              <NavItem eventKey={1} href="#">Sign up</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

  )
  }
}

export default NavBar;