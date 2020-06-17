import React from 'react';
import axios from 'axios';
import { KEYWORDS, LOCATIONS } from './../constants/CONSTANTS';
/* SAVE THIS */
import DropdownSearch from './DropdownSearch';
// import KeywordSearch from './KeywordSearch';
// import KeywordResults from './KeywordResults';
import DropdownResults from './DropdownResults';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        results: [],
        searchCategories: [],
        searchLocations: []    
      };
    }
  
  componentDidMount = async () => {
    const response = await axios({
      method: 'get',
      url: 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json'
    })

    const results = response.data;

    /* Add locations array to results */
    const locations = LOCATIONS;

    for (let i=0; i < results.length; i++) {
      for (let j=0; j < locations.length; j++) {
        if (results[i][locations[j]] === "Y") {
          if (!results[i]["locations"]) {results[i]["locations"]=[];}
          results[i]["locations"].push(locations[j]);
        }
      }
    }
    /* Add keyword array to results */
    const keywords = KEYWORDS;

    for (let i=0; i < results.length; i++) {
      for (let j=0; j < keywords.length; j++) {
        if (results[i][keywords[j]] === "Y") {
          if (!results[i]["keywords"]) {results[i]["keywords"]=[];}
          results[i]["keywords"].push(keywords[j]);
        }
      }
    }

    /* Filter results with no descriptions and contact info */
    const filteredResults = results.filter(e => e.description).filter(e => e.phone !== undefined || e.url !== undefined).filter(e => e.organizationname !== "The Salvation Army");
    
    this.setState({results: filteredResults});
    console.log(this.state.results);
  }

  /* Dropdown search submit */
  handleDropdownSubmit = (categories, locations) => {
    console.log(categories, locations);
    this.setState({searchCategories: categories,
      searchLocations: locations})
  }

  /* Single search term */
  handleKeywordSubmit = (searchTerm) => {
    console.log(searchTerm);
    this.setState({searchTerm: searchTerm});
  }

  render() {
    return (
      <div className="App ui container">
        <h1>NYC Social Service Search*</h1>
          {/* <DropdownSearch onSubmitCallback={this.handleDropdownSubmit}/> */}
          {/* <DropdownResults 
            results={this.state.results}
            categories={this.state.searchCategories}
            locations={this.state.searchLocations}
             /> */}
          <DropdownResults 
            results={this.state.results}
            categories={["health", "housing"]}
            locations={["brooklyn"]}
             />
          {/* <KeywordSearch 
            callbackSubmissionHandler={this.handleKeywordSubmit} />
          <KeywordResults 
            term={this.state.searchTerm}
            results={this.state.results} />  */}
        <Footer />
      </div>
    );
  }
}

export default App;