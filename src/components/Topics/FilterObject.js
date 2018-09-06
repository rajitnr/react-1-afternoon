import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        { name: "Jimmy Joe", title: "Hack0r", age: 12 },
        { name: "Jeremy Schrader", age: 24, hairColor: "brown" },
        { name: "Carly Armstrong", title: "CEO" }
      ],
      userInput: "",
      filteredArray: []
    };
  }

  handleChangeEvent = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  handleClickEvent = () => {
    const { unFilteredArray, userInput } = this.state;
    let filteredArrayCopy = unFilteredArray.filter(obj => {
      let trueFalse = false;
      for (let key in obj) {
        if (key === userInput) {
          trueFalse = true;
        }
      }
      return trueFalse;
    });
    this.setState({ filteredArray: filteredArrayCopy });
  };

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span>Original : {JSON.stringify(this.state.unFilteredArray)}</span>
        <input className="inputLine" onChange={this.handleChangeEvent} />
        <button
          className="confirmationButton"
          onClick={this.handleClickEvent}
          //   onClick={this.setState({
          //     filteredArray: this.state.unFilteredArray.filter(obj => {
          //       let trueFalse = false;
          //       for (let key in obj) {
          //         if (key === this.state.userInput) {
          //           trueFalse = true;
          //         }
          //       }
          //       return trueFalse;
          //     })
          //   })}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered : {JSON.stringify(this.state.filteredArray)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
