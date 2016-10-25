// import React from 'react';
// import ReactDOM from 'react-dom';
//
// var CommentBox = React.createClass({
//   getInitialState: function(){
//     return {
//       liked: false,
//       name: 'Sweet'
// };
// },
//   toggleChange: function(){
//     this.setState({liked: !this.state.liked})
// },
//   handleNameChange: function(e){
//     this.setState({name: e.target.value})
// },
//   render: function(){
//     var text = this.state.liked ? '喜欢':'不喜欢';
//     const name = this.state.name;
//     var spanStyle = { color: '#555500' };
//
//     return (
//       <div className="container" style={spanStyle}>
//         <div onClick={this.toggleChange}>See you !!!{text}</div>
//         <span>{name}</span>
//         <input
//           type="text"
//           value={this.state.name}
//           onChange={this.handleNameChange}
//         />
//       </div>
// );
// }
// });
//
// ReactDOM.render(
//   <CommentBox />,
//   document.getElementById('content')
// );


import React from 'react';
import ReactDOM from 'react-dom';
import { Grid,Row,Col, FormControl } from 'react-bootstrap';

var ChildBox = React.createClass({
  render: function () {
    // ---------内联样式-------------
    const spanStyle = {
      width: 20,
      color: '#548B54',
      fontSize: 18,
      lineHeight: 1.2,
    };
    return(
      <Grid>
        <Row>
          <Col md={8}>
            <div onClick={this.props.switchMotto} style={spanStyle}>{this.props.myMotto}</div>
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
});

var CommentBox = React.createClass({
  getInitialState: function(){
    return {
      liked: false,
      expression: 'Sweet',
    };
  },
  toggleChange: function(){
    this.setState({liked: !this.state.liked})
  },
  handleExpChange: function(e){
    this.setState({expression: e.target.value})
  },
  render: function(){
    const mottoJap = '桜があんなに洁く散るのは来年も咲くのわかってるからだよ';
    const mottoChina = '樱花这么毅然飘散是因为她知道明年还会再开';

    const liked = this.state.liked ? mottoChina : mottoJap;
    const expression = this.state.expression;

    return (
      <div>
        <ChildBox
          myExp={expression}
          myMotto={liked}
          updateExpression={this.handleExpChange}
          switchMotto={this.toggleChange}
        />
      </div>
    );
  }
});

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);