import React from 'react';
import { Link } from 'react-router';

class NavItems extends React.Component {
  render() {

    return (
      <li role="presentation">
        <Link activeClassName="active" to={this.props.to}>{this.props.text}</Link>
      </li>
    )
  }
}

export default NavItems;