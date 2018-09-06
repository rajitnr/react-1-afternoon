import React, { Component } from "react";
import EvenAndOdd from "../Topics/EvenAndOdd.js";
import FilterString from "../Topics/FilterString.js";
import Palindrome from "../Topics/Palindrome.js";
import Sum from "../Topics/Sum.js";
import FilterObject from "../Topics/FilterObject.js";
// import logo from "./logo.svg";
// import "./App.css";

class TopicBrowser extends Component {
  //   constructor() {
  //     super();
  //   }
  render() {
    return (
      <div>
        <div>
          <EvenAndOdd />
        </div>
        <div>
          <FilterObject />
        </div>
        <div>
          <FilterString />
        </div>
        <div>
          <Palindrome />
        </div>
        <div>
          <Sum />
        </div>
      </div>
    );
  }
}

export default TopicBrowser;
