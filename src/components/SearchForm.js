import React, { Component } from 'react'

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValues:[]
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange = (e) => {
    e.target.checked
    ? this.setState({inputValues: [...this.state.inputValues, e.target.id]})
    : this.setState({inputValues: this.state.inputValues.filter(keyword => keyword !== e.target.id)})
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log([...this.state.inputValues]);
  }

  render() {
    return (
      <div className="Form">
      <form onSubmit={this.handleFormSubmit} className="ui form">
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
            name="childCare"
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
        </div> {/* Fields container */}

        <button type="submit" className="ui button green mini disabled">Search</button>        
        </form>
      </div>
    )
  }
}

export default SearchForm;