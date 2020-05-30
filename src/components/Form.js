import React, { Component } from 'react'

class Form extends Component {
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
      <form onSubmit={this.handleFormSubmit}>
        <h2>I am looking for:</h2>
        <label> 
          Housing
        <input type="checkbox"
          name="housing"
          id="housing"
          onChange={this.handleInputChange} />
        </label><br />
        <label> 
          Child Care
        <input type="checkbox"
          name="childCare"
          id="childCare"
          onChange={this.handleInputChange} />
        </label><br />
        <label> 
          Food
        <input type="checkbox"
          name="food"
          id="food"
          onChange={this.handleInputChange} />
        </label><br />
        <label> 
          Health Care
        <input type="checkbox"
          name="healthCare"
          id="healthCare"
          onChange={this.handleInputChange} />
        </label><br />
        <button type="submit">Search</button>        
        </form>
      </div>
    )
  }
}

export default Form;