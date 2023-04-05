import React from 'react';

export class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  handleClick1 = (data) => {
    this.setState({ count: this.state.count + 1 })
  };

  handleClick2 = (data) => {
    this.setState({ count: this.state.count - 1 })
  };

  render(){
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick1('data text')}>+</button>
        <button onClick={this.handleClick2('data text')}>-</button>
      </div>
    )
  }
}