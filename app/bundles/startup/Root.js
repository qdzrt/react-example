import React from 'react';

import Footer from '../components/common/Footer';
import HeaderContainer from '../containers/HeaderContainer';

class Root extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Root;