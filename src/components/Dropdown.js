import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { dummyData } from './../constants/CONSTANTS';

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

  handleChange = (e, value) => {
    this.setState({value: value.value})
  }

  //searchQuery
  render() {
  return (
    <div clasName="Form">
          <h3>I am looking for: </h3>
          <Dropdown
            placeholder='Category'
            fluid
            multiple
            search
            selection
            onChange={this.handleChange}
            options={dummyData}
          />
          <h3>Located in: </h3>
          <Dropdown
            placeholder='Category'
            fluid
            multiple
            search
            selection
            options={dummyData}
          />  
    </div>
    )
  }
}

export default DropdownInput;