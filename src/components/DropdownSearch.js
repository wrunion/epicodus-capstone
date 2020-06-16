import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { searchCategories, searchLocations } from '../constants/CONSTANTS';
import './App.css';

class DropdownSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    locations: [],
    categories: []    
    }
  }

  renderLabel = (label) => ({
      color: 'blue',
      content: label.text,
      icon: 'check',
    })
  
  handleCategoryChange = (e, value) => {
    if (value.value.length <= 3) {
      this.setState({categories: value.value})
    }
  }

  handleLocationsChange = (e, value) => {
    if (value.value === "any") {
      this.setState({locations: [value.value]})
    }
    else if (value.value.length <= 2) {
    this.setState({locations: value.value})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitCallback(this.state.categories, this.state.location);
  }

  render() {
  return (
    <div className="Dropdown ui container raised segment">
      <form onSubmit={this.handleSubmit}>
        <div className="ui stackable two column grid container">
          <div className="ui two column centered row">
            <div className="column">
              <h3>I am looking for: </h3>
              <Dropdown
                placeholder='Service type'
                fluid
                multiple
                search
                selection
                minWidth={250}
                value={this.state.categories}
                renderLabel={this.renderLabel}
                onChange={this.handleCategoryChange}
                options={searchCategories}
              />
            </div>
            <div className="column">
              <h3>Located in: </h3>      
              <Dropdown
                placeholder='Location'
                fluid
                multiple
                search
                selection
                minWidth={250}
                value={this.state.locations}
                renderLabel={this.renderLabel}
                onChange={this.handleLocationsChange}
                options={searchLocations}
              /> 
            </div>
          </div>
          </div>
          <br /><br />
          <button type="submit" className="button ui fluid basic blue">Search</button>
        </form> 
    </div>
    )
  }
}

export default DropdownSearch;