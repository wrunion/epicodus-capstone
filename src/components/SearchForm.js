import React, { Component } from 'react'
import ResultDisplay from './ResultDisplay';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'housing', 
      inputValues:[],
      locationInputValues: [],
      formShowing: true
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLocationInputChange = this.handleLocationInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange = (e) => {
    e.target.checked
    ? this.setState({inputValues: [...this.state.inputValues, e.target.id]})
    : this.setState({inputValues: this.state.inputValues.filter(keyword => keyword !== e.target.id)})
  }

  handleLocationInputChange = (e) => {
    e.target.checked
    ? this.setState({locationInputValues: [...this.state.locationInputValues, e.target.id]})
    : this.setState({locationInputValues: this.state.locationInputValues.filter(keyword => keyword !== e.target.id)})
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log([...this.state.inputValues]);
    this.setState({formShowing: false});
  }

  render() {
    if (this.state.formShowing === true) {
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
            name="manhattan"
            id="childCare"
            onChange={this.handleInputChange} />
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
          <div className="ui checkbox grid-item">
          <input type="checkbox"
            name="brooklyn"
            id="brooklyn"
            onChange={this.handleLocationInputChange} />
          <label>Brooklyn</label>
          </div>
        </div>
        <div className="field">
          <div className="ui checkbox">
          <input type="checkbox"
            name="manhattan"
            id="manhattan"
            onChange={this.handleLocationInputChange} />
            <label>Manhattan</label>
          </div>
        </div>
        <div className="field">
          <div className="ui checkbox">
          <input type="checkbox"
            name="bronx"
            id="bronx"
            onChange={this.handleLocationInputChange} />
            <label>Bronx</label>
          </div>
        </div>
        <div className="field">
          <div className="ui checkbox">
          <input type="checkbox"
            name="staten_island"
            id="staten_island"
            onChange={this.handleLocationInputChange} />
            <label>Staten Island</label>
          </div>
        </div>
        <div className="field">
          <div className="ui checkbox">
          <input type="checkbox"
            name="queens"
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
    } else {
      return (
      <ResultDisplay term={this.state.term} />
      );
    }
  }
}
// staten_island
export default SearchForm;