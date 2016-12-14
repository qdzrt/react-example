import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class NavItems extends React.Component {
  render() {
    const navClass = classNames({
      'navbar-item': true,
    });
    return (
      <li role="presentation">
        <Link className={navClass} activeClassName="active" to={this.props.to}>{this.props.text}</Link>
      </li>
    )
  }
}

export default NavItems;