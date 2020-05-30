import React from 'react'

function ResultDisplay(props) {
  /* Filter Salvation Army out of results, since they are anti-trans */
  const results = props.results.filter(e => e.organizationname !== "The Salvation Army");
  
  if (results.length > 0) {
  return (
    <div className="ResultList">
      <h3>Search Results:</h3>
      {results.map(e => <div>{e.organizationname}</div>)}
    </div>
  )
  } else if (results.length > 15) {
    return (
      <div className="ResultList">
        Your search returned {results.length} results. Would you like to answer a few questions about yourself, to help us find the results that are the best match? 
        <button>Yes</button><button>No, show me all results</button>
      </div>
      );
    } else {
      return null;
  }
}

export default ResultDisplay;