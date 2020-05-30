import React from 'react';
import axios from 'axios';

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
    results: []
  }

  // onSearchSubmit(term) {
  //   Axios.get(this.baseurl, {
  //     params: { 
  //       query: term, 
  //       $$app_token: this.appToken
  //     }
  //   });
  // }

  // onSearch(term) {
  //   Axios.get(`${this.baseurl}?${term}=Y&$$app_token=${this.appToken}`)
  // }
  //OR: 
  onSearchClick = async () => {
    const response = await axios.get('https://data.cityofnewyork.us/resource/pqg4-dm6b.json?bronx=Y&arts_culture=Y&housing=Y&disabilities=Y&$$app_token=NDQ8EOLrXHft9YeGZ2axBbxzb');
    this.setState({results: response.data})
  }

  logState = () => {
    console.log(this.state);
  }

 

  render(){
    return (
      <div className="App">
        <h2>Test Search</h2>
        <button type="button" onClick={this.onSearchClick}>Click me to test</button>
        <button type="button" onClick={this.logState}>Click to log state</button>
        <span>{this.state.results.length}</span>
      </div>
    );
  }
}

export default App;