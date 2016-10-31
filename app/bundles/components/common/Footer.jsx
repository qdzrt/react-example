import React from 'react';
import { Button, Grid,Row,Col,  } from 'react-bootstrap';

import '../../../assets/stylesheets/style.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Grid>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                常（つね）に明（あか）るさを失（うしな）わず努力する人には、神（かみ）はちゃんと未来を準備してくれます。<br />
                老天会为总是保持乐观努力的人，安排一个应得的美好未来。
              </div>
              <Button bsStyle="primary" bsSize="sm" className="fr">Sweet</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
export default Footer;
