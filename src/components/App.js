import React from 'react';
import axios from 'axios';
import { Segment } from 'semantic-ui-react';
import { KEYWORDS, LOCATIONS } from './../constants/CONSTANTS';
/* SAVE THIS */
// import DropdownSearch from './DropdownSearch';
import KeywordSearch from './KeywordSearch';
import RegexResults from './RegexResults';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        results: [],
        resultsShowing: false,
        searchCategoryArray: [],
        searchLocationArray: [],
        searchLocation: '',
        searchTerm: ''
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

  handleFormSubmit = (categories, location) => {
    console.log(categories, location);
    this.setState({searchCategories: categories,
      searchLocation: location, resultsShowing: true})
  }

  handleKeywordSubmit = (searchTerm) => {
    console.log(searchTerm);
    this.setState({searchTerm: searchTerm});
  }



  render() {
    return (
      <div className="App ui container">
        <h1>Welcome to NYC Social Service Finder*</h1>
        <Segment>
          {/* SAVE THIS */}
          {/* <DropdownSearch onSubmitCallback={this.handleFormSubmit}/> */}
          <KeywordSearch 
            callbackSubmissionHandler={this.handleKeywordSubmit} />
          <RegexResults 
            term={this.state.searchTerm}
            results={this.state.results} /> 
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default App;