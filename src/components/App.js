import React from 'react';
import axios from 'axios';
import ResultDisplay from './ResultDisplay';
import Form from './Form';
import { c } from './../constants/CONSTANTS';

class App extends React.Component {
  constructor(props) {
    super(props);
    //   this.baseurl = "https://data.cityofnewyork.us/resource/pqg4-dm6b.json";
    //   this.appToken = "$$app_token=NDQ8EOLrXHft9YeGZ2axBbxzb";
      this.state = {
        term: 'housing',
        checkedTerms: [],
        results: [],
      };
    this.handleInputChange = this.handleInputChange.bind(this);
    }
  
  // onSearch(term) {
  //   Axios.get(`${this.baseurl}?${term}=Y&${this.appToken}`)
  // }
  //OR: 
  onSearchClick = async () => {
    const response = await axios.get(`${c.BASE_URL}?${this.state.term}=Y&${c.APP_TOKEN}`);
    this.setState({results: response.data});
    console.log(response);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

  }

  
  handleInputChange = (e) => {
    e.target.checked
    ? this.setState({[e.target.id]: true}) 
    : this.setState({[e.target.id]:false});
  }
  
  render() {
    const results = this.state.results;
    console.log(c.MENTAL_HEALTH);
    return (
      <div className="App">
        <Form />
        <ResultDisplay results={results}/>
        <button onClick={this.onSearchClick}>test search</button>
      </div>
    );
  }
}

export default App;