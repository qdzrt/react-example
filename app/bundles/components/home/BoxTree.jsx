import React from 'react';
import { Grid,Row,Col,  } from 'react-bootstrap';

class BoxTree extends React.Component {
  render() {
    const img = require("./xiezhuang.jpg");
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <div className="box-item container-img">
              <div>要求袁咏仪当众卸妆 张智霖不怕被老婆当场砍死么</div><br/>
              <img src={img} />
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default BoxTree;