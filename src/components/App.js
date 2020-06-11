import React from 'react';
// import axios from 'axios';
// import SearchForm from './SearchForm';
import DropdownInput from './Dropdown';
import Footer from './Footer';
import './App.css';
// import TestResultDisplay from './TestResultDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        results: []
      };
    }
  
  // componentDidMount = async () => {
  //   const response = await axios({
  //     method: 'get',
  //     url: 'https://data.cityofnewyork.us/resource/pqg4-dm6b.json',
  //     // options: {
  //     //   transformRequest: [
  //     //     (data, headers) => {
  //     //       data = data.filter(e =>
  //     //         e.organizationname !== "The Salvation Army").filter(e => 
  //     //           e.description !== undefined).filter(e => e.phone !== undefined ||
  //     //         e.url !== undefined);
  //     //       return data;
  //     //     }
  //     //   ]
  //     // }
  //   })

  //   this.setState({results: response.data});
  //   console.log(this.state.results);
  // }

  handleFormSubmit = (categories, locations) => {
    console.log(categories, locations);
  }

  render() {
    // const results = this.state.results;

    return (
      <div className="App ui container">
        <h1>Welcome to NYC Social Service Finder*</h1>
        {/* <SearchForm results={results} /> */}
        <DropdownInput onSubmitCallback={this.handleFormSubmit}/>
        {/* <TestResultDisplay /> */}
        <Footer />
      </div>
    );
  }
}

export default App;