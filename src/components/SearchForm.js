import React, { Component } from 'react'
import ResultDisplay from './ResultDisplay';
import { c } from './../constants/CONSTANTS';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'housing', 
      location: 'brooklyn',
      inputValues:[],
      formShowing: true,
      formSubmitted: false,
      resultsShowing: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLocationInputChange = this.handleLocationInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  filterResultsFromProps = () => {
    /* Get results info from props */
    const { results } = this.props;
    /* Filter out results that have no description or contact info */
    const filteredResults = results.filter(e => e.organizationname !== "The Salvation Army").filter(e => e.description).filter(e => e.phone !== undefined || e.url !== undefined);
    /* Add that to state, to pass down to ResultDisplay */
    this.setState({results: filteredResults});
  }

  handleInputChange = (e) => {
    // e.target.checked
    // ? this.setState({inputValues: [...this.state.inputValues, e.target.id]})
    // : this.setState({inputValues: this.state.inputValues.filter(keyword => keyword !== e.target.id)})
    if (e.target.checked) {
      this.setState({term: e.target.id});
    }
  }

  handleLocationInputChange = (e) => {
    if (e.target.checked) {
      this.setState({location: e.target.id});
    } 
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.filterResultsFromProps();
    this.setState({resultsShowing: true, formSubmitted: true});
    // this.setState({formShowing: false});
  }

  render() {
    if (this.state.formSubmitted === false) {
    return (
      <div className="Form">
      <form onSubmit={this.handleFormSubmit} className="ui form">
        {/* START Service type container */}
        <div className="inline fields">
          <label>I am looking for:</label>
        <div className="field">
          <div className="ui checkbox grid-item">
          <input type="checkbox"
            name="housing"
            id="housing"
            onChange={this.handleInputChange} />
          <label>Housing</label>
          </div>
        </div>
        <div className="field">
          <div className="ui checkbox">
          <input type="checkbox"
            name={c.CHILD_CARE}
            id={c.CHILD_CARE}
            onChange={this.handleInputChange}
             />
            <label>Child Care</label>
          </div>
        </div>
        <div className="field">
          <div className="ui checkbox">
          <input type="checkbox"
            name="food"
            id="food"
            onChange={this.handleInputChange} />
            <label>Food</label>
          </div>
        </div>
        <div className="field">
          <div className="ui checkbox">
          <input type="checkbox"
            name="health"
            id="health"
             
            onChange={this.handleInputChange} />
            <label>Health Care</label>
          </div>
        </div>
        <div className="field">
          <div className="ui checkbox">
          <input type="checkbox"
            name="mental_health"
            id="mental_health"
             
            onChange={this.handleInputChange} />
            <label>Mental Health Care</label>
          </div>
        </div>
        </div> {/* END Service Type container */}

        {/* START Location container  */}
        <div className="inline fields">
          <label>Located in:</label>
        <div className="field">
          <div className="ui radio checkbox grid-item">
          <input type="radio"
            name="location"
            id="brooklyn"
            onChange={this.handleLocationInputChange} />
          <label>Brooklyn</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="location"
            id="manhattan"            
            onChange={this.handleLocationInputChange} />
            <label>Manhattan</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="location"
            id="bronx"           
            onChange={this.handleLocationInputChange} />
            <label>Bronx</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="location"
            id="staten_island"            
            onChange={this.handleLocationInputChange} />
            <label>Staten Island</label>
          </div>
        </div>
        <div className="field">
          <div className="ui radio checkbox">
          <input type="radio"
            name="location"
            id="queens"             
            onChange={this.handleLocationInputChange} />
            <label>Queens</label>
          </div>
        </div>
      </div>
        <button type="submit" className="ui button green mini">Search</button>        
        </form>
      </div>
    )
    } else if (this.state.resultsShowing === true && this.state.formSubmitted === true) {
      return (
      <ResultDisplay 
        term={this.state.term}
        results={this.state.results}
        location={this.state.location} />
      );
    }
  }
}

export default SearchForm;