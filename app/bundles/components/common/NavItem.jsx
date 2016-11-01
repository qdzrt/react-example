import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class NavItems extends React.Component {
  render() {
    const navClass = classNames({
      'nav-item': true,
      'active': this.props.isActive,
    });
    return (
      <li role="presentation">
        <Link className={navClass} to={this.props.to} activeClassName="active">{this.props.text}</Link>
      </li>
    )
  }
}

export default NavItems;