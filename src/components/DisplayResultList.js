import React from 'react'

function DisplayResultList(props) {
  const results = props.results;
  return (
    <div>
      {results.length}
    </div>
  )
}

export default DisplayResultList;