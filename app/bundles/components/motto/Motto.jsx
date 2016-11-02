import React from 'react';
import { Grid,Row,Col, FormControl } from 'react-bootstrap';
import MottoBox from './MottoBox';

class Motto extends React.Component{
  constructor(){
    // 构造函数里面做的任务就是默认的state以及一些函数方法的绑定
    // 如果再render里面绑定方法，是不是要考虑一下每次render都会进行绑定一次，
    // 没有看过源码，按照react的算法，应该不可能，可能是多虑了，不过在constructor里面
    // 绑定this，是官方推荐的做法
    super();
    this.state = {
      liked: false,
      expression: 'Sweet',
      mottoJap: '桜があんなに洁く散るのは来年も咲くのわかってるからだよ',
      mottoChina: '樱花这么毅然飘散是因为她知道明年还会再开'
    };
    this.handleExpChange = this.handleExpChange.bind(this)
    this.toggleChange = this.toggleChange.bind(this)
  }

  toggleChange(){
    this.setState({liked: !this.state.liked})
  }

  handleExpChange(e){
    this.setState({expression: e.target.value})
  }
  // 这边可以使用一个通用的handleChange方法，目前的方法，可以用到一些有value值得情况下，
  // 碰到一些时间空间或者其他选择控件或许会出问题
  // 并且如果一个组建里面有很多的input那按照这个就会写好多相同的方法了。
  // 优化一下如下
  handleChange(files, e) {
    this.setState({ [files]: e && e.target ? e.target.value : e })
  }

  render() {
    // 使用es6解构，代码更加优雅，便于维护
    const { mottoJap, mottoChina, expression, liked } = this.state
    // const mottoJap = this.state.mottoJap;
    // const mottoChina = this.state.mottoChina;

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
                    // updateExpression={this.handleExpChange}
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
