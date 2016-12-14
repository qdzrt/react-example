import React from 'react';

class Header extends React.Component {
  render() {
    // child components
    return (
      <header>
        {this.props.children}
      </header>
    )
  }
}

export default Header;