import React from 'react';

class About extends React.Component {
  render() {
    const img = require("./flower.jpg");
    return (
      <section>
        <div>
          <img src={img} />
        </div>
      </section>
    )
  }
}

export default About;