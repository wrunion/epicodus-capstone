import React from 'react'

function ResultDisplay(props) {

  const { term, location, results } = props;

  /* Filter out results that have no description or contact info */
  // const results = props.results.filter(e => e.organizationname !== "The Salvation Army").filter(e => e.description).filter(e => e.phone !== undefined || e.url !== undefined);
 
  /* Search through the filtered results using search term and location props  */
  const resultsToDisplay = results.filter(e => e.housing === "Y" && e.brooklyn === "Y");
  
  // const filteredResults = (keyword, location, arr) => {     
  //   return arr.filter(e =>     
  //                     e[location] === "Y" &&    
  //                     e[keyword] === "Y") }

  // const filterForKeyword = (keyword) => {
  //   return keyword === "Y";
  // }
  // var resultsToDisplay = results.filter(filterForKeyword.bind(null, term));

  if (resultsToDisplay.length > 0) {
  return (
    <div className="ResultList">
      <h3>Results:</h3>
      <p>There are {resultsToDisplay.length} results for "{term}" in "{location}"</p>
      {resultsToDisplay.map(e => 
        <details><summary>{e.organizationname}</summary>
          {e.description ? 
            <div className="ResultListDescription">{e.description}</div> 
            : null}
          {e.phone ? 
            <div className="phone">{e.phone}</div> : null} 
          {e.url ?  
            <div className="url">{e.url}</div> 
            : null}
          {e.address1 ? 
            <div className="address">{e.address1}</div> 
            : null}
        </details>)}
    </div>
  )
  } else if (resultsToDisplay.length > 15) {
    return (
      <div className="ResultList">
        Your search returned {resultsToDisplay.length} results. 
        Would you like to answer a few questions about yourself, to help us find the results that are the best match? 
        <button>Yes, help me filter the results</button><button>No, show me all results</button>
      </div>
      );
    } else {
      return null;
  }
}

export default ResultDisplay;