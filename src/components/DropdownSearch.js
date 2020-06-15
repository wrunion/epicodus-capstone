import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { searchCategories, searchLocations } from '../constants/CONSTANTS';

class DropdownSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    location: '',
    categories: []    
    }
  }

  renderLabel = (label) => ({
      color: 'blue',
      content: label.text,
      icon: 'check',
    })
  
  handleCategoryChange = (e, value) => {
    // e.preventDefault();
    if (value.value.length <= 2) {
      this.setState({categories: value.value})
    }
  }

  handleLocationChange = (e, value) => {
    this.setState({location: value.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitCallback(this.state.categories, this.state.location);
  }

  render() {
  return (
    <div className="Dropdown ui container raised segment">
      <form onSubmit={this.handleSubmit}>
          <h3>I am looking for: </h3>
          {this.state.categories.length >= 4 ? 
          <div className="ui message yellow">
            Please choose <strong>3 or less</strong> options for best search results.
          </div>
          : null}
          <Dropdown
            placeholder='Service type'
            fluid
            multiple
            search
            selection
            renderLabel={this.renderLabel}
            onChange={this.handleCategoryChange}
            options={searchCategories}
            value={this.state.categories}
          />
          <br />
          <h3>Located in: </h3>      
          <Dropdown
            placeholder='Location'
            fluid
            multiple
            search
            selection
            renderLabel={this.renderLabel}
            onChange={this.handleLocationChange}
            options={searchLocations}
          /> <br /><br />
          <button type="submit" className="button ui fluid basic blue">Search</button>
        </form> 
    </div>
    )
  }
}

export default DropdownSearch;