import React, { Component } from 'react'

class UserItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.email}</td>
      </tr>
    )
  }
}

export default UserItem