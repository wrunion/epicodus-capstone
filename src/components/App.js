import React from 'react';
import axios from 'axios';
import { Segment } from 'semantic-ui-react';
/* SAVE THIS */
// import DropdownSearch from './DropdownSearch';
import KeywordSearch from './KeywordSearch';
import Results from './Results';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        results: [],
        resultsShowing: false,
        searchCategories: [],
        searchLocation: ''
      };
    }
  
  componentDidMount = async () => {
    const response = await axios({
      method: 'get',
      url: 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json',
      // options: {
      //   transformRequest: [
      //     (data, headers) => {
      //       data = data.filter(e =>
      //         e.organizationname !== "The Salvation Army").filter(e => 
      //           e.description !== undefined).filter(e => e.phone !== undefined ||
      //         e.url !== undefined);
      //       return data;
      //     }
      //   ]
      // }
    })

    this.setState({results: response.data});
    console.log(this.state.results);
  }

  handleFormSubmit = (categories, location) => {
    console.log(categories, location);
    this.setState({searchCategories: categories,
      searchLocation: location, resultsShowing: true})
  }

  handleKeywordSubmit = (props) => {
    console.log(props);
  }

  render() {
    // const results = this.state.results;
    // const keywords = this.state.searchCategories;
    // const location = this.state.location;

    return (
      <div className="App ui container">
        <h1>Welcome to NYC Social Service Finder*</h1>
        <Segment>
          {/* SAVE THIS */}
          {/* <DropdownSearch onSubmitCallback={this.handleFormSubmit}/> */}
          <KeywordSearch callbackSubmissionHandler={this.handleKeywordSubmit} />
          <Results />
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default App;