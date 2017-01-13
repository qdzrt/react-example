import React from 'react';
import { IndexLink } from 'react-router';
import NavItems from './NavItem';
import { Navbar,NavItem, Nav, Collapse } from 'react-bootstrap';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      navItems: [
        { text: "Home", to: "/home" },
        { text: "About", to: "/about" },
        { text: "Motto", to: "/motto" },
        { text: "Users", to: "/users" },
      ]
    }
  }
  render() {
    const { navItems } = this.state;
    // forEach(no return value) vs map(have a return value)
    // use es6 rest parameter 不定参数
    const navItemsComponents = navItems.map((props, index) => <NavItems key={index} {...props}/>);
    return (
      <Navbar inverse >
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/">Lotu</IndexLink>
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