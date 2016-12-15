import React, { Component, Children } from 'react';

class Header extends Component {
  render() {
    // Three possible values of this.props.children
    // undefined(No child nodes)、object(A child node)、array(Multiple child nodes)
    return (
      <header>
        {Children.map(this.props.children, (child)=> <div>{child}</div>)}
      </header>
    )
  }
}

export default Header;