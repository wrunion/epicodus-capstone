import React from 'react';
import axios from 'axios';
// import ResultDisplay from './ResultDisplay';
import SearchForm from './SearchForm';
import './App.css';
import { c } from './../constants/CONSTANTS';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        term: '',
        results: []
      };
    }
  
  componentDidMount = async () => {
    const response = await axios.get(`${c.BASE_URL}`);
    this.setState({results: response.data});
    console.log(this.state.results);
  }

  formSubmitCallback = (props) => {
    this.setState({term: props.term});
  }

  render() {
    // const results = this.state.results;
    // const term = this.state.term;

    return (
      <div className="App ui container">
        <h1>Welcome to the NYC Women's Services Database</h1>
        <SearchForm />

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