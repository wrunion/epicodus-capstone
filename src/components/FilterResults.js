import React, { Component } from 'react';
// import keywordPairs from './../constants/PAIRS';
// import './Sidebar.css';

class FilterResults extends Component {
  constructor(props) {
    super(props); 
    this.state ={

    }
  }

  // HOW TO do this with a keyword array ???? 
  matchResults = (arr, keyword) => {
    const regex = new RegExp(keyword, "gi");
    return arr.filter(e => regex.test(e.organizationname) || regex.test(e.description) || e[keyword] === "Y");
  }

  /* Function to filter duplicates out of an array */
  noDuplicates = (arr) => {
    let output = [arr[0]];
    for (let i =0; i< arr.length; i++) {
        for (let j=0; j<output.length;i++) {
            if (output[j]['organizationname'] !== arr[i]['organizationname']) {
                output.push(arr[i]); break; } } }
    return output;
  }

  render() {
    const results = this.props.results;
    if (results.length > 0) {
    return (
      <div className="FilterResults">
        {results[0]["organizationname"]}
      </div>
    );
    } else {
      return null;
    }
  }
}



export default FilterResults;