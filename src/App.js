import React, {Component} from 'react';

class Counter extends Component {
  constructor () {
    super();
    this.state = {
      count: 0,
      double: false
    }
  }

  //this where methods live
  increment = () => {
    let x = (this.state.double) ? 2 : 1;
    let y = (this.state.double) ? 19 : 20;
    if (this.state.count < y) {
      this.setState({
        count: this.state.count + x,
      })
    }
  }

  decrement = () => {
    let x = (this.state.double) ? 2 : 1;
    let y = (this.state.double) ? 1 : 0;
    if (this.state.count > y) {
      this.setState({
        count: this.state.count - x,
      })
    }
  }

  reset = () => {
    this.setState({
      count: 0,
    })
  }

  toggle = () => {
    if (this.state.double) {
      this.setState({
        double: false
      })
    } else {
      this.setState({
        double: true
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="navbar">Counter</div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.increment}>Increment</button>
          <button type="button" onClick={this.decrement}>Decrement</button>
          <button type="button" onClick={this.reset}>Reset</button>
          <button id="double" type="button" onClick={this.toggle}>{(this.state.double) ? 'Double' : 'Single'} Increment</button>
        </div>
      </div>
    )
  }
};

export default Counter;
