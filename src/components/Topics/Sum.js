import React, { Component } from "react";

class Sum extends Component {
  constructor() {
    super();
    this.state = {
      inputNum1: 0,
      inputNum2: 0,
      sum: null
    };
  }
  changeNum1 = e => {
    this.setState({ inputNum1: e.target.value });
  };
  changeNum2 = e => {
    this.setState({ inputNum2: e.target.value });
  };
  calculateSum = () => {
    this.setState({
      sum: Number(this.state.inputNum1) + Number(this.state.inputNum2)
    });
  };
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          type="number"
          name=""
          id=""
          className="inputLine"
          onChange={this.changeNum1}
        />
        <input
          type="number"
          name=""
          id=""
          className="inputLine"
          onChange={this.changeNum2}
        />
        <button className="confirmationButton" onClick={this.calculateSum}>
          Add
        </button>
        <span className="resultsBox">Sum : {this.state.sum}</span>
      </div>
    );
  }
}

export default Sum;
