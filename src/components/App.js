import React from 'react';
import axios from 'axios';
import DisplayResultList from './DisplayResultList';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.baseurl = "https://data.cityofnewyork.us/resource/pqg4-dm6b.json";
  //   this.appToken = "NDQ8EOLrXHft9YeGZ2axBbxzb";
  //   this.state = {
  //     searchData: []
  //   }
  // }
  state = {
    term: '',
    results: []
  }

  // onSearch(term) {
  //   Axios.get(`${this.baseurl}?${term}=Y&$$app_token=${this.appToken}`)
  // }
  //OR: 
  onSearchClick = async () => {
    const response = await axios.get(`https://data.cityofnewyork.us/resource/pqg4-dm6b.json?bronx=Y&arts_culture=Y&${this.state.term}=Y&$$app_token=NDQ8EOLrXHft9YeGZ2axBbxzb`);
    this.setState({results: response.data})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render(){
    const results = this.state.results;
    return (
      <div className="App">
        <h2>Test Search</h2>
        <input 
          type="text" id="term" 
          onChange={this.handleChange} />
          <br/><br/>
        <button 
          type="button" 
          onClick={this.onSearchClick}>Click me to test</button> <br /><br/>
          <DisplayResultList results={results} /> 
      </div>
    );
  }
}

export default App;