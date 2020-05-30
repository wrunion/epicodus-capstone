import React from 'react'

function DisplayResultList(props) {
  const results = props.results;
  if (results.length > 0) {
  return (
    <div className="ResultList">
      <h3>Search Results:</h3>
      {results.map(e => <div>{e.organizationname}</div>)}
    </div>
  )
  } else {
    return null;
  }
}

export default DisplayResultList;