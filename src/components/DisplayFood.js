import React from 'react'

function DisplayFood(props) {
  const results = props.results;
  if (results.length === 0) {
    return null;
  } else {
  /* filter out results w/out descriptions */
  const filteredResults = results.filter(e => e.description);
  /* then search through the descriptions to find any mention of "food" */
  const foodResults = filteredResults.filter(e => e.description.includes("food"));

  if (foodResults.length > 0) {
  return (
    <div className="DisplayFood">
      Food Results:
      {foodResults.map(
        e => <div>{e.organzationname}</div>
        )}
    </div>
    );
    }  
  }
}

export default DisplayFood;

/* 
More specialized search options: 

const healthCareResults = filteredResults.filter(e => e.description.includes("health"));

const mentalHealthCareResults = filteredResults.filter(e => e.description.includes("mental health"));

*/