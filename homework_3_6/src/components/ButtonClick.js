import React from 'react';

export class ButtonClick extends React.Component {

  handleClick1 = (data) => () => {
    console.log('Div clicked');
  };

  handleClick2 = (data) => (e) => {
    console.log('Button clicked');
    e.stopPropagation ();
  };

  render(){
    return (
      <div onClick={this.handleClick1('data text')} >
        <button onClick={this.handleClick2('data text')}>button</button>
      </div>
    )
  }
}