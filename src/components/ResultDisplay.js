import React from 'react'

//var housingResults = temp1.filter(e => e.housing === "Y")

function ResultDisplay(props) {
  /* Filter Salvation Army out of results, since they are anti-trans */
  const results = props.results.filter(e => e.organizationname !== "The Salvation Army");
  /* Filter results with no description */
  const resultsWithDescriptions = results.filter(e => e.description);
  /* Filter to only results with urls or phone # */
  const resultsWithContactInfo = resultsWithDescriptions.filter(e => e.phone !== undefined || e.url !== undefined); 


    const resultsToDisplay = resultsWithContactInfo.filter(e => e.housing === "Y")
  

  if (resultsToDisplay.length > 0) {
    console.log(resultsToDisplay);
  return (
    <div className="ResultList">
      <h3>Results:</h3>
      <p>Your search returned {resultsWithContactInfo.length} results</p>
      {resultsWithContactInfo.map(e => 
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
  } else if (results.length > 15) {
    return (
      <div className="ResultList">
        Your search returned {results.length} results. 
        Would you like to answer a few questions about yourself, to help us find the results that are the best match? 
        <button>Yes, help me filter the results</button><button>No, show me all results</button>
      </div>
      );
    } else {
      return null;
  }
}

export default ResultDisplay;