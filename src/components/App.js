import React from 'react';
import axios from 'axios';
// import ResultDisplay from './ResultDisplay';
import SearchForm from './SearchForm';
import './App.css';
// import { c } from './../constants/CONSTANTS';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        results: []
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

  render() {
    const results = this.state.results;

    return (
      <div className="App ui container">
        <h1>Welcome to the NYC Women's Services Database</h1>
        <SearchForm results={results} />

        {/* {term ?
          <ResultDisplay results={results} term={term} />
          : null}

        {results.length === 0 ? 
           <button className="ui button blue" id="TestSearchButton" onClick={this.onSearchClick}>Get all results</button> 
          : null} */}
      </div>
    );
  }
}

export default App;