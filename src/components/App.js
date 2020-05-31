import React from 'react';
import axios from 'axios';
import ResultDisplay from './ResultDisplay';
import SearchForm from './SearchForm';
import DisplayFood from './DisplayFood';
import { c } from './../constants/CONSTANTS';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        term: 'housing',
        checkedTerms: [],
        results: [],
      };
    }
  
  onSearchClick = async () => {
    const response = await axios.get(`${c.BASE_URL}?${this.state.term}=Y&brooklyn=Y&${c.APP_TOKEN}`);
    this.setState({results: response.data});
    console.log(response.data);
  }

  render() {
    const results = this.state.results;
    return (
      <div className="App">
        <SearchForm />
        <ResultDisplay results={results}/>
        <DisplayFood results={results} />
        <button onClick={this.onSearchClick}>test search</button>
      </div>
    );
  }
}

export default App;