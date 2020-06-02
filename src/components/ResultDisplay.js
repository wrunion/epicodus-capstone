import React from 'react'

function ResultDisplay(props) {

  const { term, location, results } = props;

  /* Search through the filtered results using search term and location props  */
  const resultsToDisplay = results.filter(e => e[term] === "Y" && e[location] === "Y");
  
  /* Filter in progress */
  // const filteredResults = (keyword, location, arr) => {     
  //   return arr.filter(e =>     
  //                     e[location] === "Y" &&    
  //                     e[keyword] === "Y") }

  if (resultsToDisplay.length > 0) {
  return (
    <div className="ResultList">
      <div className="ui message">
        <h5>Your search returned {resultsToDisplay.length} results:</h5>
      </div>
      {/* <p className="grey-text"><em>To search again, change your selections above</em></p> */}
       {/* <div className="ui message">To search again, change your selections above</div> */}
      {resultsToDisplay.map(e => 
        <details><summary>{e.organizationname}</summary>
        <div className="ResultListDetails">
          {e.description ? 
            <div className="ResultListDescription">{e.description}</div> 
            : null}
          {e.phone ? 
            <div className="phone"><span className="bold-text">Phone:</span> {e.phone}</div> : null} 
          {e.url ?  
            <div className="url"><span className="bold-text">Website:</span> {e.url}</div> 
            : null}
          {e.address1 ? 
            <div className="address"><span className="bold-text">Address:</span> {e.address1}</div> 
            : null}
          <hr /></div>
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