import React from 'react';
import { Grid,Row,Col, FormControl } from 'react-bootstrap';

class MottoBox extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={6}>
            <div className="motto-content" onClick={this.props.switchMotto}>{this.props.myMotto}</div>
          </Col>
          <Col md={3}>
            <div>
              <span>{this.props.myExp}</span><br />
              <FormControl
                type="text"
                value={this.props.myExp}
                onChange={this.props.updateExpression}
              />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default MottoBox;