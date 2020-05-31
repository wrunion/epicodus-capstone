import React from 'react'

function ResultDisplay(props) {
  /* Filter Salvation Army out of results, since they are anti-trans */
  const results = props.results.filter(e => e.organizationname !== "The Salvation Army");

  if (results.length > 0) {
  return (
    <div className="ResultList">
      <h3>Search Results:</h3>
      {results.map(e => 
        <details><summary>{e.organizationname}</summary><br/>
          {e.phone ? e.phone : null} {e.url ?  e.url : null}
          {e.description ? e.description : null}
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