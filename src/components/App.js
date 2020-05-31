import React from 'react';
import axios from 'axios';
import ResultDisplay from './ResultDisplay';
import SearchForm from './SearchForm';
// import DisplayFood from './TextSearch';
import { c } from './../constants/CONSTANTS';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        results: [],
      };
    }
  
  onSearchClick = async () => {
    const response = await axios.get(`${c.BASE_URL}`);
    this.setState({results: response.data});
    console.log(this.state.results);
  }

  render() {
    const results = this.state.results;
    return (
      <div className="App ui container">
        <SearchForm />
        <ResultDisplay results={results}/>
        {/* <DisplayFood results={results} /> */}
        <button className="ui button blue" onClick={this.onSearchClick}>Get all results</button>
      </div>
    );
  }
}

export default App;