import React, { Component } from "react";

class Palindrome extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      palindrome: ""
    };
  }
  handleInputChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };
  handleClickEvent = () => {
    // console.log("clicked");

    const { userInput } = this.state;
    let palindromeCopy =
      userInput
        .toLowerCase()
        .split("")
        .reverse()
        .join() ===
      userInput
        .toLowerCase()
        .split("")
        .join()
        ? "true"
        : "false";
    this.setState({ palindrome: palindromeCopy });
  };

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input
          type="text"
          className="inputLine"
          onChange={this.handleInputChange}
          // onChange={function(e) {
          //   this.setState({ userInput: e.target.value });
          // }}
        />
        <button className="confirmationButton" onClick={this.handleClickEvent}>
          Check
        </button>
        <span className="resultsBox">Palindrome : {this.state.palindrome}</span>
      </div>
    );
  }
}

export default Palindrome;
