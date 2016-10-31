import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="black-bg">
        {this.props.children}
      </header>
    )
  }
}

export default Header;