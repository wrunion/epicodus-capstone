import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import DropdownInput from './Dropdown';
import Footer from './Footer';
import './App.css';

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

  render() {
    // const results = this.state.results;

    return (
      <div className="App ui container">
        <h1>Welcome to the NYC Social Services Database*</h1>
        {/* <SearchForm results={results} /> */}
        <DropdownInput />
        <Footer />
      </div>
    );
  }
}

export default App;