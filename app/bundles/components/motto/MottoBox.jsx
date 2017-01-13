import React, { Component } from 'react';
import { Grid, Row, Col, FormControl } from 'react-bootstrap';

class MottoBox extends Component {
  render() {
    const { switchMotto, myMotto, myExp, updateExpression } = this.props;
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <div className="motto" onClick={switchMotto}>{myMotto}</div>
          </Col>
          <Col md={10} className="item-m">
            <div>
              <span>{myExp}</span><br />
              <FormControl
                type="text"
                value={myExp}
                onChange={updateExpression}
              />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default MottoBox;