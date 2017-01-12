import React from 'react';
import { Grid,Row,Col, FormControl } from 'react-bootstrap';

class MottoBox extends React.Component {
  render() {
    const { switchMotto, myMotto, myExp, updateExpression, users } = this.props;
    return (
      <Grid>
        <Row>
          <Col md={6}>
            <div className="motto" onClick={switchMotto}>{myMotto}</div>
          </Col>
          <Col md={3}>
            <div>
              <span>{myExp}</span><br />
              <FormControl
                type="text"
                value={myExp}
                onChange={updateExpression}
              />
            </div>
            <div>{users}</div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default MottoBox;