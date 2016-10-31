import React from 'react';
import { Grid,Row,Col, FormControl } from 'react-bootstrap';

class Motto extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={8}>
            <div className="motto-content" onClick={this.props.switchMotto}>{this.props.myMotto}</div>
          </Col>
          <Col md={4}>
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

export default Motto;