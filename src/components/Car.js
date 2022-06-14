import React, { Component } from 'react';

class Car extends Component {
  constructor() {
    super();
    this.state = {
      car: 'Ferrari',
    };
  }

  changeMessage() {
    this.setState({
      car: 'Jaguar',
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.car}</h1>
        <button onClick={() => this.changeMessage()}>Change</button>
      </div>
    );
  }
}

export default Car;
