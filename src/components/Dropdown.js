import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { searchCategories, searchLocations } from './../constants/CONSTANTS';

class DropdownInput extends React.Component {
  state = {
    locations: [],
    categories: []
  }

//   const addressDefinitions = faker.definitions.address

    // const dummyData = [
    //   {name: "name1", description: "description1"},
    //   {name: "name2", description: "description2"},
    //   {name: "name3", description: "description3"},
    //   {name: "name4", description: "description4"},
    //   {name: "name5", description: "description5"}
    // ];



    /* TO ADD */
    // const renderLabel = (label) => ({
    //   color: 'blue',
    //   content: `Customized label - ${label.text}`,
    //   icon: 'check',
    // })
    /* ADD TO DROPDOWN */
    // renderLabel={renderLabel}

  handleCategoryChange = (e, value) => {
    this.setState({categories: value.value})
  }

  handleLocationChange = (e, value) => {
    this.state.locations.length >= 3 
    ?  this.setState({locations: value.value, locationWarning:true})
    : this.setState({locations: value.value})
  }

  //searchQuery
  render() {
  return (
    <div clasName="Dropdown ui container">
          <h3>I am looking for: </h3>
          {this.state.categories.length >=3 ? 
          <div className="ui message yellow">
            Please choose <strong>3 or less</strong> options for best search results.
          </div>
          : null}
          <Dropdown
            placeholder='Category'
            fluid
            multiple
            search
            selection
            onChange={this.handleCategoryChange}
            options={searchCategories}
          />
          <h3>Located in: </h3>
          {this.state.locations.length >=3 ? 
          <div className="ui message yellow">
            Please choose <strong>3 or less</strong> locations for best search results.
          </div>
          : null}
          <Dropdown
            placeholder='Category'
            fluid
            multiple
            search
            selection
            onChange={this.handleLocationChange}
            options={searchLocations}
          />  
    </div>
    )
  }
}

export default DropdownInput;