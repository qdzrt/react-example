import React from 'react';
import { Grid, Row, Col, FormControl } from 'react-bootstrap';

import MottoBox from './MottoBox';

class Motto extends React.Component{
  constructor(){
    super();
    this.state = {
      liked: false,
      expression: 'Sweet',
      mottoJap: '桜があんなに洁く散るのは来年も咲くのわかってるからだよ',
      mottoChina: '樱花这么毅然飘散是因为她知道明年还会再开',
    };
    this.toggleChange = this.toggleChange.bind(this)
  }

  toggleChange(){
    this.setState({liked: !this.state.liked})
  }

  handleChange(files, e) {
    this.setState({ [files]: e && e.target ? e.target.value : e })
  }

  render() {
    // use es6 destructuring
    const { mottoJap, mottoChina, expression, liked } = this.state;
    return (
      <section>
        <Grid>
          <Row>
            <Col md={12}>
              <div className="box-item">
                <MottoBox
                  myExp={expression}
                  myMotto={liked && mottoChina || mottoJap}
                  updateExpression={this.handleChange.bind(this, 'expression')}
                  switchMotto={this.toggleChange}
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default Motto;
