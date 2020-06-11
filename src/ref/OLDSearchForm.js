import React, { Component } from 'react'
import ResultDisplay from './ResultDisplay';
// import { c } from './../constants/CONSTANTS';
import { Form, Input, Button } from 'semantic-ui-react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'housing',
      formShowing: true,
      formSubmitted: false,
      results: [],
      resultsShowing: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  filterResultsFromProps = () => {
    /* Get results info from props */
    const { results } = this.props;
    /* Filter out results that have no description or contact info */
    /* Also, fix some obvious display errors */
    const filteredResults = results.filter(e => e.organizationname !== "The Salvation Army").filter(e => e.description).filter(e => e.phone !== undefined || e.url !== undefined).map(e => e.organizationname === "The ARab American Family Support Center" ? "The Arab American Family Support Center" : e);
    /* Add that to state, to pass down to ResultDisplay */
    this.setState({results: filteredResults});
  }

  handleChange = (e) => {
    const selectedTerm = e.target.value;
    this.setState({term: selectedTerm});
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.filterResultsFromProps();
    this.setState({resultsShowing: true, formSubmitted: true});
  }

  // renderResults = () => {
  //   return (
  //   <ResultDisplay 
  //   term={this.state.term}
  //   results={this.state.results}
  //   location={this.state.location} />
  //   )
  // }

  render() {
    return (
      <div className="Form ui segment raised">
          <Form onSubmit={this.handleFormSubmit}>
          <h3>Keyword Search:</h3>
          <Input 
            id="term"
            required
            icon='search' 
            value={this.state.value}
            defaultValue="housing"
            onChange={this.handleChange}
            placeholder='Search...' /> <br /><br />
          <Button type="submit" color="green basic">Submit</Button>
        </Form>
      {/* TO FIX!!    */}
      {/* How do I fix this so it only updates on submit ? */}
      {this.state.formSubmitted ?       
        <ResultDisplay 
          term={this.state.term}
          results={this.state.results} />
          : null}
      </div>
    );
  }
}

export default SearchForm;