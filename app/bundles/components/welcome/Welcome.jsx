import React from 'react';
import { Grid,Row,Col,  } from 'react-bootstrap';

class About extends React.Component {
  render() {
    const img = require("./flower.jpg");
    return (
      <section>
        <div className="box-item">
          <h1>Index Page</h1>
        </div>
      </section>
    )
  }
}

export default About;