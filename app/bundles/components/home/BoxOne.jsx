import React from 'react';

class BoxOne extends React.Component {
  render() {
    const img = require("./news.png");
    return (
      <div>
        <img src={img} />
      </div>
    )
  }
}

export default BoxOne;