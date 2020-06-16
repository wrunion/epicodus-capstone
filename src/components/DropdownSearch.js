import React from 'react';
import { Dropdown, Header } from 'semantic-ui-react';
import { searchCategories, searchLocations } from '../constants/CONSTANTS';
import './App.css';

class DropdownSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    locations: [],
    categories: [],
    errorMessage: false    
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
    if (value.value.includes("any")) {
      this.setState({locations: ["any"]});
    }
    else 
    if (value.value.length <= 1) {
    this.setState({locations: value.value})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { categories, locations } = this.state;

    categories.length > 0 && locations.length > 0 ?
    this.props.onSubmitCallback(this.state.categories, this.state.locations)
    : this.setState({errorMessage: true})
  }

  render() {
  return (
    <div className="DropdownSearch ui container segment">
      <form onSubmit={this.handleSubmit}>
        <div className="ui stackable two column grid container">
          <div className="ui two column centered row">
            <div className="column dropdownInputSingle">
              <Header 
                as="h3"
                content="I am looking for: " />
              <Dropdown
                placeholder='Search Categories'
                fluid
                multiple
                search
                selection
                required
                minwidth={250}
                value={this.state.categories}
                renderLabel={this.renderLabel}
                onChange={this.handleCategoryChange}
                options={searchCategories}
              />
            </div>
            <div className="column dropdownInputSingle">
              <Header as="h3"
                content="Located in: " />    
              <Dropdown
                placeholder='Location'
                fluid
                multiple
                search
                selection
                required
                minwidth={250}
                value={this.state.locations}
                renderLabel={this.renderLabel}
                onChange={this.handleLocationsChange}
                options={searchLocations}
              /> 
            </div>
          </div>
          </div>
          <br />
          <div className="ui centered row">
            {this.state.errorMessage === true ? 
            <div className="ui message green center-text bold-text">
              Please select a location and a category
            </div>
            : null}
            <br />
            <button type="submit" className="button ui fluid basic blue">Search</button>
          </div>
        </form> 
    </div>
    )
  }
}

export default DropdownSearch;