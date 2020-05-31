import React from 'react'

function FilterResults(props) {
  /* Pull all search results from props */
  const initialResults = props.results;
  /* Filter out several organizations */
  const results = props.results.filter(e =>   e.organizationname !== "The Salvation Army");
  
  var housingResults = temp1.filter(e => e.housing === "Y")

  return (
    <div>
      
    </div>
  )
}
export default FilterResults;