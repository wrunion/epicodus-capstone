import React from 'react';
import axios from 'axios';
import DisplayResultList from './DisplayResultList';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    //   this.baseurl = "https://data.cityofnewyork.us/resource/pqg4-dm6b.json";
    //   this.appToken = "NDQ8EOLrXHft9YeGZ2axBbxzb";
      this.state = {
        term: 'housing',
        checkedTerms: [],
        results: [],
      };
    this.handleInputChange = this.handleInputChange.bind(this);
    }
  

  addToArray = (term) => {
    //run query for term and add result to output div
    this.setState({checkedTerms: [...this.state.checkedTerms,term]});
  }

  removeFromArray = (term) => {
    this.setState({checkedTerms: this.state.checkedTerms.filter(e => e !== term)})
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
    return (
      <div className="App">
        <Form />
        <DisplayResultList results={results}/>
      </div>
    );
  }
}

export default App;