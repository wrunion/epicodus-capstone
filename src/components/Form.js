import React, { Component } from 'react'

class Form extends Component {
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
        </label>
        </form>
      </div>
    )
  }
}

export default Form;