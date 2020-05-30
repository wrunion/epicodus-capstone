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
    term: '',
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
    const response = await axios.get(`https://data.cityofnewyork.us/resource/pqg4-dm6b.json?bronx=Y&arts_culture=Y&${this.state.term}=Y&$$app_token=NDQ8EOLrXHft9YeGZ2axBbxzb`);
    this.setState({results: response.data})
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  showOrganzationNames = () => {
    this.state.results.map(result => <div>{result.organizationname}</div>
    )
  }

  render(){
    return (
      <div className="App">
        <h2>Test Search</h2>
        <input type="text" id="term" onChange={this.handleChange} /> <br/><br/>
        <button type="button" onClick={this.onSearchClick}>Click me to test</button> <br /><br/>
        <span>{this.state.results.length}</span>
      </div>
    );
  }
}

export default App;