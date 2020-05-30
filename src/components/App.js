import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.baseurl = "https://data.cityofnewyork.us/resource/pqg4-dm6b.json";
    this.appToken = "NDQ8EOLrXHft9YeGZ2axBbxzb"
  }

  onSearchSubmit(term) {
    Axios.get(this.baseurl, {
      params: { 
        query: term, 
        $$app_token: this.appToken
      }
    });
  }

  onSearch(term) {
    Axios.get(`${this.baseurl}?${term}=Y&$$app_token=${this.appToken}`)
  }
  //OR: 
  onSearchAlt(term) {
    fetch('https://data.cityofnewyork.us/resource/pqg4-dm6b.json?bronx=Y&arts_culture=Y&housing=Y&disabilities=Y&$$app_token=NDQ8EOLrXHft9YeGZ2axBbxzb')
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render(){
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;