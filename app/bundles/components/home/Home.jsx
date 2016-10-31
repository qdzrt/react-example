import React from 'react';
import BoxOne from './BoxOne';
import BoxTwo from './BoxTwo';
import BoxTree from './BoxTree';

class Home extends React.Component {
  render() {
    return (
      <section>
        <div>
          <BoxOne />
          <BoxTwo />
          <BoxTree />
        </div>
      </section>
    )
  }
}

export default Home;