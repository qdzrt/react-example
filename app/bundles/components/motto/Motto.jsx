import React from 'react';
import { Grid,Row,Col, FormControl } from 'react-bootstrap';
import MottoBox from './MottoBox';

class Motto extends React.Component{
  constructor(){
    super();
    this.state = {
      liked: false,
      expression: 'Sweet',
      mottoJap: '桜があんなに洁く散るのは来年も咲くのわかってるからだよ',
      mottoChina: '樱花这么毅然飘散是因为她知道明年还会再开'
    }
  }

  toggleChange(){
    this.setState({liked: !this.state.liked})
  }

  handleExpChange(e){
    this.setState({expression: e.target.value})
  }

  render() {
    const mottoJap = this.state.mottoJap;
    const mottoChina = this.state.mottoChina;

    return (
        <section>
          <Grid>
            <Row>
              <Col md={12}>
                <div className="box-item">
                  <MottoBox
                    myExp={this.state.expression}
                    myMotto={this.state.liked ? mottoChina : mottoJap}
                    updateExpression={this.handleExpChange}
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