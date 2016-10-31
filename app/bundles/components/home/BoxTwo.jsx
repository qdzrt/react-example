import React from 'react';
import { Button, Grid,Row,Col,  } from 'react-bootstrap';

class BoxTwo extends React.Component {
  render() {
    const img = require("./new1.jpg");
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <div className="box-item container-img">
              <div>男童为救白血病父亲暴饮暴食>男童为救白血病父亲暴饮暴食：要再给我爸一条命</div><br/>
              <img src={img}/>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default BoxTwo;