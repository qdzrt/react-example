import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap';

export default class BoxTwo extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <div className="box-item">
              <div>add content here</div>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}