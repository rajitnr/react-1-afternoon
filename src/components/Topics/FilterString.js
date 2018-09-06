import React, { Component } from "react";

class FilterString extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        "James",
        "Jessica",
        "Melody",
        "Tyler",
        "Blake",
        "Jennifer",
        "Mark",
        "Maddy"
      ],
      userInput: "",
      filteredArray: []
    };
  }
  handleInputChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };
  handleClickEvent = () => {
    const { userInput, unFilteredArray } = this.state;
    let filteredArrayCopy = unFilteredArray.filter(element => {
      return element.includes(userInput);
    });
    this.setState({ filteredArray: filteredArrayCopy });
  };

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Names : {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input
          type="text"
          className="inputLine"
          onChange={this.handleInputChange}
        />
        <button className="confirmationButton" onClick={this.handleClickEvent}>
          Filter String
        </button>
        <span className="resultsBox filterStringRB">
          Filtered Names: {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterString;
