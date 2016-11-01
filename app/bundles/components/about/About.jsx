import React from 'react';
import { Grid,Row,Col,  } from 'react-bootstrap';

class About extends React.Component {
  render() {
    const img = require("./flower.jpg");
    return (
      <section>
        <Grid>
          <Row>
            <Col md={12}>
              <div className="box-item container-img">
                <img src={img} />
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    )
  }
}

export default About;