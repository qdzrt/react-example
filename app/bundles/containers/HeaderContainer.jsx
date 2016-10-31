import React from 'react';
import Header from '../components/common/Header';
import NavBar from '../components/common/NavBar';

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header>
        <NavBar />
      </Header>
    )
  }
}

export default HeaderContainer;