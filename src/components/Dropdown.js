import React from 'react';
import { Dropdown } from 'semantic-ui-react';

function DropdownInput() {

//   const addressDefinitions = faker.definitions.address

    // const dummyData = [
    //   {name: "name1", description: "description1"},
    //   {name: "name2", description: "description2"},
    //   {name: "name3", description: "description3"},
    //   {name: "name4", description: "description4"},
    //   {name: "name5", description: "description5"}
    // ];

    const dummyData = [
      {key: 1, text: "Child Care", value: 'child_care_parent_information'},
      {key: 2, text: "Mental Health Care", value: 'counseling_support_groups'},
      {key: 3, text: "Health Care", value: 'health'},
      {key: 4, text: "Housing", value: 'housing'},
      {key: 5, text: "Youth Services", value: 'youth_services'},
      {key: 6, text: "LGBTQ", value: 'lesbian_gay_bisexual_and_or_transgender'}
    ]

    /* TO ADD */
    // const renderLabel = (label) => ({
    //   color: 'blue',
    //   content: `Customized label - ${label.text}`,
    //   icon: 'check',
    // })
    /* ADD TO DROPDOWN */
    // renderLabel={renderLabel}

    //searchQuery
  return (
    <div clasName="Form">
          <h3>I am looking for: </h3>
          <Dropdown
            placeholder='Category'
            fluid
            multiple
            search
            selection
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

export default DropdownInput;