import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (e) => {
    e.target.checked 
    ? this.setState({checked: true}) 
    : this.setState({checked:false});
  }

  render() {
    return(
      <React.Fragment>
        <label>
          Search for Housing 
          <input
            name="housing"
            id="housing"
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleInputChange} />
        </label>
      </React.Fragment>
    );
  }
}

export default Checkbox;