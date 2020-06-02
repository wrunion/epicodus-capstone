import React, { Component } from 'react'
import ResultDisplay from './ResultDisplay';
import { c } from './../constants/CONSTANTS';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      keywords:[],
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
    e.target.checked
    ? this.setState({keywords: [...this.state.keywords, e.target.id]})
    : this.setState({keywords: this.state.keywords.filter(keyword => keyword !== e.target.id)})
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
  }

  render() {
    return (
      <div className="Form ui segment raised">
      <form onSubmit={this.handleFormSubmit} className="ui form">
        {/* START Service type container */}
        <h3>{this.state.formSubmitted ? "Showing results for: " : "I am looking for: "}</h3>
        <div className="inline fields">
        <div className="field">
          <div className="ui checkbox">
          <input type="checkbox"
            name="term"
            id="housing"
            onChange={this.handleInputChange} />
          <label>Housing</label>
          </div>
        </div>
        <div className="field">
          <div className="ui checkbox">
          <input type="checkbox"
            name="term"
            id={c.CHILD_CARE}
            onChange={this.handleInputChange}
             />
            <label>Child Care</label>
          </div>
        </div>
        <div className="field">
          <div className="ui checkbox">
          <input type="checkbox"
            name="term"
            id={c.YOUTH_SERVICES}
            // displayName="Youth Programs"
            onChange={this.handleInputChange} />
            <label>Youth Programs</label>
          </div>
        </div>
        <div className="field">
          <div className="ui checkbox">
          <input type="checkbox"
            name="term"
            id="health"             
            onChange={this.handleInputChange} />
            <label>Health Care</label>
          </div>
        </div>
        <div className="field">
          <div className="ui checkbox">
          <input type="checkbox"
            name="term"
            id={c.MENTAL_HEALTH}             
            onChange={this.handleInputChange} />
            <label>Mental Health Care</label>
          </div>
        </div>
        </div> {/* END Service Type container */}

        {/* START Location container  */}
        <h4>Located In: </h4>
        <div className="inline fields">
          {/* <label>Located in:</label> */}
        <div className="field">
          <div className="ui radio checkbox grid-item">
          <input type="radio"
            name="location"
            required
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
      {this.state.formSubmitted ?       
          // <button type="submit" className="ui button green mini">Search Again</button>
          <div className="ui green message">To search again, change your selections above</div>
        : <button type="submit" className="ui button green mini">Search</button>}
        </form>
      {this.state.formSubmitted ?       
        <ResultDisplay 
          keywords={this.state.keywords}
          results={this.state.results}
          location={this.state.location} />
          : null}
      </div>
    );
  }
}

export default SearchForm;