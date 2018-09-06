import React, { Component } from "react";

class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }

  handleEvenOddInput = e => {
    console.log("Input found", e.target.value);
    this.setState({
      userInput: e.target.value
    });
  };

  handleEvenOddClickEvent = () => {
    console.log("Inside click event");
    const { userInput } = this.state;
    // let userInputCopy = this.state.userInput;
    console.log(userInput.split(","));
    let evenArrayCopy = [];
    let oddArrayCopy = [];
    userInput.split(",").forEach(num => {
      num % 2
        ? oddArrayCopy.push(Number(num))
        : evenArrayCopy.push(Number(num));
    });
    this.setState({ evenArray: evenArrayCopy, oddArray: oddArrayCopy });
  };

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange={this.handleEvenOddInput} />
        <button
          className="confirmationButton"
          onClick={this.handleEvenOddClickEvent}
        >
          Split
        </button>
        <span className="resultsBox">
          Evens : {JSON.stringify(this.state.evenArray)}
          {/* Evens: [
          {this.state.evenArray.map(element => {
            return element + ", ";
          })}
          ] */}
        </span>
        <span className="resultsBox">
          Odds : {JSON.stringify(this.state.oddArray)}
          {/* Odds: [
          {this.state.oddArray.map(element => {
            return element + ", ";
          })}
          ] */}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
